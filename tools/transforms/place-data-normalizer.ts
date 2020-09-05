import _, { values } from "lodash";
import moment from "moment";
import {
    Transform,
    TransformCallback,
    TransformOptions,
} from "stream";
import { cleanObject, DataSourceCodeEnum, IRawLocationData } from "../utils";

export const clearValue = (value?: string, defaultValue?: string) => {
    if (!value || (/^\s*n\.?\s*d\.\s*$/i).test(value)) {
        return defaultValue;
    }
    return value;
}

export const locationMapper = (entry: any, defaultValues?: any): IRawLocationData | undefined => {
    const belfioreCode = clearValue(entry["Codice AT"] || entry["Codice Catastale del comune"] || entry.CODCATASTALE);
    const name = entry["Denominazione IT"] || entry["Denominazione (b)"] || entry.DENOMINAZIONE_IT;
    if (!belfioreCode || !name) {
        return undefined;
    }
    return cleanObject({
        belfioreCode,
        creationDate: entry.DATAISTITUZIONE && moment(entry.DATAISTITUZIONE, "YYYY-MM-DD").startOf("day").toISOString(),
        dataSource: (entry.FONTE in DataSourceCodeEnum) ? entry.FONTE : defaultValues?.dataSource,
        expirationDate: entry.STATO === "C"
            && entry.DATACESSAZIONE && moment(entry.DATACESSAZIONE, "YYYY-MM-DD").endOf("day").toISOString()
            || entry["Anno evento"] && moment(entry["Anno evento"], "YYYY").endOf("year").toISOString(),
        iso3166alpha2: clearValue(entry["Codice ISO 3166 alpha2"]),
        name,
        // newIstatCode: entry["Codice Stato/Territorio_Figlio"],
        // iso3166alpha3: entry["Codice ISO 3166 alpha3"],
        province: entry.SIGLAPROVINCIA,
    });
};

export interface IPlaceDataNormalizerOptions extends TransformOptions {
    defaultValues?: object;
}

export class PlaceDataNormalizer extends Transform {
    protected defaultValues: object = {};
    constructor(opts?: IPlaceDataNormalizerOptions) {
        super(opts);
        this.defaultValues = (opts || {}).defaultValues || {};
    }

    public _transform(chunk: any, encoding: string, callback: TransformCallback) {
        let element;
        if (this.readableObjectMode) {
            element = chunk;
        } else {
            try {
                element = JSON.parse(chunk.toString("utf8"));
            } catch (err) {
                return callback(err);
            }
        }

        if (!element) {
            return callback();
        }

        const mappedEntry = locationMapper(element, this.defaultValues);
        if (!mappedEntry) {
            return callback();
        }
        callback(null, mappedEntry);
    }
}
