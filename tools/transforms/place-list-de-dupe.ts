import _ from "lodash";
import moment from "moment";
import { Transform, TransformCallback } from "stream";
import { belfioreToInt, cleanObject, DEFAULT_CREATION_DATE, IMappedLocationType } from "../utils";

const MERGE_MAP: { [key: string]: (valS: any, valD: any) => string | null } = {
    active: (valS: any, valD: any): string | null => valS || valD,
    creationDate: (valS: any, valD: any): string | null => valS && valD ?
        moment.min(moment(valD), moment(valS)).toISOString() : null,
    expirationDate: (valS: any, valD: any): string | null => valD && valS ?
        moment.max(moment(valD), moment(valS)).toISOString() : null,
};

export const merge = (...entries: IMappedLocationType[]) => {
    if (entries.length < 2) {
        return entries[0];
    }
    const sortedEntries = entries.sort((a, b) => moment(b.creationDate || DEFAULT_CREATION_DATE)
        .diff(moment(a.creationDate || DEFAULT_CREATION_DATE), "day"));

    const merged = sortedEntries.reduce((aggr, entry) => _.mergeWith(
            aggr,
            entry,
            (valD: any, valS: any, key: string) => {
                const customizer = MERGE_MAP[key];
                if (customizer) {
                    return customizer(valS, valD);
                }
                return valD;
            },
        ));

    return cleanObject(merged);
};

export const deDupeList = (dataList: IMappedLocationType[]) => Object
    .entries(_.groupBy(dataList, "belfioreCode"))
    .map(([belfioreCode, entries]) => ({ ...merge(...entries), belfioreCode }))
    .sort((a, b) => belfioreToInt(a.belfioreCode) - belfioreToInt(b.belfioreCode))
    ;

export class PlaceListDeDupe extends Transform {
    protected storage: any[] = [];
    public _transform(chunk: any, encoding: string, callback: TransformCallback) {
        let element;
        if (this.readableObjectMode) {
            element = chunk;
        } else {
            try {
                element = JSON.parse(chunk.toString("utf8"));
            } catch (err) {
                return callback(err as Error);
            }
        }
        if (element?.belfioreCode) {
            this.storage.push(element);
        }
        callback();
    }

    public _flush(callback: TransformCallback) {
        let ddl;
        try {
            ddl = deDupeList(this.storage);
        } catch (err) {
            this.storage.length = 0;
            return callback(err as Error);
        }
        this.push(ddl);
        this.storage.length = 0;
        callback();
    }
}
