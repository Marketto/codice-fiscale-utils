import fs from "fs";
import path from "path";
import got from "got";
import { promisify } from "util";
import locationResources from "../location-resources.json";
import { Duplex } from "stream";

/*
const arrToObjReducer = (accumulator, element) => ({
    ...accumulator,
    ...element,
});
*/

const licenseSrcStreams: Array<[string, Duplex]> = Object.entries(locationResources.licenseFiles)
    .map(([licenseId, uri]): [string, Duplex] => [licenseId, got.stream(uri) as unknown as Duplex]);

const licenseWriteStreams = Object.values(locationResources.licenses)
    .map(({ license, name }) => ({
        fileName: `${name.toUpperCase().replace(/[^A-Z\d]/g, "_")}.LICENSE`,
        licenseId: license,
    }));

export const exportLicenses = (destPath: string) => {
    console.log(`Exporting Licenses`);
    Promise.all(
        licenseSrcStreams.map(async ([ licenseId, readingStream]) => Promise.all(
            licenseWriteStreams
                .filter((writingCfg) => writingCfg.licenseId === licenseId)
                .map(async ({ fileName }) => {
                    const fileFullPath = path.join(destPath, fileName);
                    const fileExists = await promisify(fs.exists)(fileFullPath);
                    if (fileExists) {
                        await promisify(fs.unlink)(fileFullPath);
                    }
                    console.log(`Exporting License: ${licenseId} - ${fileName}`);
                    const writingStream = fs.createWriteStream(fileFullPath);

                    readingStream.pipe(writingStream);
                    return await new Promise((resolve, reject) => {
                        writingStream.on("finish", resolve);
                        readingStream.on("error", reject);
                        writingStream.on("error", reject);
                    }).then(result => {
                        console.log(`Exported License: ${licenseId} - ${fileName}`);
                        return result;
                    }).catch(err => {
                        if (err?.message) {
                            err.message = `${fileName} - ${err.message}`;
                        }
                        throw err;
                    });
                }),
        )),
    );
}
