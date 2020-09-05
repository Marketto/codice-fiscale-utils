import csvtojson from "csvtojson";
import fs from "fs";
import mergeStream from "merge-stream";
import request from "request";
import { Duplex, pipeline, Transform, TransformCallback } from "stream";
import { promisify } from "util";
import locationResources from "../location-resources.json";
import { IcovAutoDecode } from "../transforms/auto-decode";
import { PlaceDataNormalizer } from "../transforms/place-data-normalizer";
import { PlaceListCompressor } from "../transforms/place-list-compressor";
import { PlaceListDeDupe } from "../transforms/place-list-de-dupe";
import { PlaceListUnZip } from "../transforms/place-list-unzip";
import { errorHandler, IAssetGeneratorConfigResource } from "../utils";

const uriCfgList: IAssetGeneratorConfigResource[] = (locationResources.resources as IAssetGeneratorConfigResource[])
    // unfolding uris
    .reduce((accumulator: IAssetGeneratorConfigResource[], resConfig: IAssetGeneratorConfigResource) => [
        ...accumulator,
        ...([] as string[]).concat(resConfig.uri).map((uri: string) => ({
            ...resConfig,
            uri,
        })),
    ], []);

const streamList: NodeJS.ReadableStream[] = uriCfgList.map((cfg) => {
    const cfgPipeline = [request.get(cfg.uri as string) as unknown as NodeJS.ReadableStream];
    if ((/\.zip$/i).test(cfg.uri as string)) {
        cfgPipeline.push(new PlaceListUnZip({ fileNameMatcher: /\.(?:csv?)$/i}));
    }
    cfgPipeline.push(
        new IcovAutoDecode(),
        csvtojson({
            delimiter: cfg.delimiter,
            trim: true,
        }, { objectMode: true }),
        new PlaceDataNormalizer({
            defaultValues: {
                dataSource: cfg.defaultSourceCode,
            },
            objectMode: true,
        }),
    );

    return pipeline(cfgPipeline, errorHandler) as Duplex;
});

export const exportDataset =  (destFile: string) => new Promise(async (resolve, reject) => {
    const fileExists = await promisify(fs.exists)(destFile);
    if (fileExists) {
        await promisify(fs.unlink)(destFile);
    }
    pipeline(
        mergeStream(
            ...streamList,
        ),
        new PlaceListDeDupe({ objectMode: true }),
        new PlaceListCompressor(),
        new Transform({
            objectMode: true,
            transform(data: any, encoding: string, callback: TransformCallback) {
                if (data) {
                    callback(null, `const CITIES_COUNTRIES = ${JSON.stringify({
                        data,
                        licenses: Object.values(locationResources.licenses),
                        sources: uriCfgList.map(({ uri }) => uri),
                    }, null, 4)};\nexport default CITIES_COUNTRIES;\n`);
                }
            },
        }),
        fs.createWriteStream(destFile),
        errorHandler,
    )
    .on("finish", resolve)
    .on("error", reject);
});
