import csvtojson from "csvtojson";
import fs from "fs";
import mergeStream from "merge-stream";
import got from "got";
import { Duplex, pipeline, Transform, TransformCallback } from "stream";
import { promisify } from "util";
import locationResources from "../location-resources.json";
import { DataNormalizer } from "../transforms/data-normalizer";
import { PlaceListCompressor } from "../transforms/place-list-compressor";
import { PlaceListDeDupe } from "../transforms/place-list-de-dupe";
import { PlaceListUnZip } from "../transforms/place-list-unzip";
import { errorHandler } from "../utils";
import { XlsxToJson } from "../transforms/xlsx-to-json";
import type { IAssetGeneratorConfigResource } from "../models/asset-generator-config-resource.interface";
import { IAssetGeneratorConfig } from "../models/asset-generator-config.interface";

const streamList: NodeJS.ReadableStream[] = (
	locationResources as unknown as IAssetGeneratorConfig
).resources.map((cfg) => {
	console.log(`Streaming data: ${cfg.uri}`);
	const cfgPipeline: NodeJS.ReadableStream[] = [
		got.stream(cfg.uri as string) as unknown as NodeJS.ReadableStream,
	];
	if (/\.zip$/i.test(cfg.uri as string)) {
		cfgPipeline.push(new PlaceListUnZip({ target: cfg.target as string }));
	}

	if (/\.xlsx?$/i.test(cfg.target || (cfg.uri as string))) {
		cfgPipeline.push(new XlsxToJson());
	} else if (/\.csv?$/i.test(cfg.target || (cfg.uri as string))) {
		cfgPipeline.push(
			csvtojson(
				{
					delimiter: cfg.delimiter,
					trim: true,
					flatKeys: true,
				},
				{ objectMode: true }
			)
		);
	} else {
		throw new Error(`Unhandled file type: ${cfg.target || cfg.uri}`);
	}

	cfgPipeline.push(
		new DataNormalizer({
			config: cfg as unknown as IAssetGeneratorConfigResource,
			objectMode: true,
		})
	);

	return pipeline(cfgPipeline, errorHandler) as Duplex;
});

export const exportDataset = (destFile: string) =>
	new Promise(async (resolve, reject) => {
		console.log(`Exporting Datasets: ${destFile}`);
		const fileExists = await promisify(fs.exists)(destFile);
		if (fileExists) {
			await promisify(fs.unlink)(destFile);
		}
		pipeline(
			mergeStream(...streamList),
			new PlaceListDeDupe({ groupKey: locationResources.resourceGroupKey }),
			new PlaceListCompressor(),
			new Transform({
				objectMode: true,
				transform(data: any, encoding: string, callback: TransformCallback) {
					if (data) {
						callback(
							null,
							`const CITIES_COUNTRIES = ${JSON.stringify(
								{
									data,
									licenses: Object.values(locationResources.licenses),
									sources: [
										...new Set(
											locationResources.resources.map(({ uri }) => uri)
										),
									],
								},
								null,
								4
							)};\nexport default CITIES_COUNTRIES;\n`
						);
					}
				},
			}),
			fs.createWriteStream(destFile),
			errorHandler
		)
			.on("finish", resolve)
			.on("error", reject);
	});
