import dotenv from "dotenv";
import moment from "moment";
const initialTimer = moment();
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { exportDataset } from "./generators/dataset-generator";
import { exportLicenses } from "./generators/licenses-generator";

dotenv.config({ path: path.join(__dirname, "./.env") });

const DEST_PATH = path.join(__dirname, "../asset");
const DEFAULT_DATASET_FILE_PATH = path.join(DEST_PATH, "cities-countries.ts");

promisify(fs.exists)(DEST_PATH)
.then((pathExists) => {
    console.log(`Path verified: ${pathExists}`);
    return pathExists ? null : promisify(fs.mkdir)(DEST_PATH);
})
.then(() => Promise.all([
    exportLicenses(DEST_PATH),
    exportDataset(DEFAULT_DATASET_FILE_PATH),
]))
.then(() => {
    // tslint:disable-next-line: no-console
    console.log(`Assets Generated in ${moment().diff(initialTimer, "s")} s`);
})
.catch((err: any) => {
    // tslint:disable-next-line: no-console
    console.error(err);
});
