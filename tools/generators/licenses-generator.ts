import fs from "fs";
import path from "path";
import request from "request";
import { promisify } from "util";

import locationResources from "../location-resources.json";
const DEST_PATH = path.join(__dirname, "../asset");

/*
const arrToObjReducer = (accumulator, element) => ({
    ...accumulator,
    ...element,
});
*/

const licenseSrcStreams: Array<[string, request.Request]> = Object.entries(locationResources.licenseFiles)
    .map(([licenseId, uri]): [string, request.Request] => [licenseId, request.get(uri)]);

const licenseWriteStreams = Object.values(locationResources.licenses)
    .map(({ license, name }) => ({
        fileName: `${name.toUpperCase().replace(/[^A-Z\d]/g, "_")}.LICENSE`,
        licenseId: license,
    }));

export const exportLicenses = (destPath: string) => Promise.all(
        licenseSrcStreams.map(async ([ licenseId, readingStream]) => Promise.all(
            licenseWriteStreams
                .filter((writingCfg) => writingCfg.licenseId === licenseId)
                .map(async ({ fileName }) => {
                    const fileFullPath = path.join(destPath, fileName);
                    const fileExists = await promisify(fs.exists)(fileFullPath);
                    if (fileExists) {
                        await promisify(fs.unlink)(fileFullPath);
                    }
                    const writingStream = fs.createWriteStream(fileFullPath);

                    readingStream.pipe(writingStream);
                    return await new Promise((resolve, reject) => {
                        writingStream.on("finish", resolve);
                        readingStream.on("error", reject);
                        writingStream.on("error", reject);
                    });
                }),
        )),
    );
