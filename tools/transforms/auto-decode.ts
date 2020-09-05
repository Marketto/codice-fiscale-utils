import { PassThrough, pipeline, Transform, TransformCallback } from "stream";
import { errorHandler } from "../utils";
// tslint:disable-next-line: no-var-requires
const AutoDetectDecoderStream = require("autodetect-decoder-stream");

export class IcovAutoDecode extends PassThrough {
    private autoDetectDecoderStream: Transform = new AutoDetectDecoderStream();
    private stringToBuffer: Transform = new Transform({
        transform(chunk: string, encoding: string, callback: TransformCallback) {
            callback(null, chunk && Buffer.from(chunk, "utf8"));
        },
    });

    public pipe<T extends NodeJS.WritableStream>(destination: T): T {
        return pipeline<T>(
            super.pipe(this.autoDetectDecoderStream, { end: true }),
            this.stringToBuffer,
            destination,
            errorHandler,
        );
    }
}
