import fs from "fs";
import path from "path";
import got from "got";
import { promisify } from "util";
import locationResources from "../location-resources.json";

export const exportLicenses = (destPath: string) => {
	console.log(`Exporting Licenses`);

	return Promise.all(
		Object.entries(locationResources.licenseFiles).map(([licenseId, uri]) =>
			got.get(uri).then((licenseFile) => ({ [licenseId]: licenseFile }))
		)
	)
		.then((licenseFiles) =>
			licenseFiles.reduce(
				(aggr, licenseFile) => ({ ...aggr, ...licenseFile }),
				{}
			)
		)
		.then((licenseFileMap) =>
			Object.values(locationResources.licenses).map(({ license, name }) => ({
				fileName: `${name?.toUpperCase()?.replace(/[^A-Z\d]/g, "_")}.LICENSE`,
				licenseId: license,
				data: licenseFileMap[license],
			}))
		)
		.then((licenseList) =>
			Promise.all(
				licenseList.map(async ({ fileName, licenseId, data }) => {
					const fileFullPath = path.join(destPath, fileName);
					const fileExists = await promisify(fs.exists)(fileFullPath);
					if (fileExists) {
						await promisify(fs.unlink)(fileFullPath);
					}
					console.log(`Exporting License: ${licenseId} - ${fileName}`);
					await promisify(fs.writeFile)(fileFullPath, data.rawBody);
				})
			)
		);
};
