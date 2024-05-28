import {
	Readable,
	Transform,
	TransformCallback,
	TransformOptions,
} from "stream";
import yauzl, { Entry } from "yauzl";

export interface IPlaceListUnZipOptions extends TransformOptions {
	target: string;
}

export class PlaceListUnZip extends Transform {
	private target: string;
	private buffer: Buffer = Buffer.alloc(0);

	constructor(opts: IPlaceListUnZipOptions) {
		super(opts);
		this.target = opts.target;
	}
	public _transform(
		chunk: Buffer,
		encoding: string,
		callback: TransformCallback
	) {
		this.buffer = Buffer.concat(
			[this.buffer, chunk],
			this.buffer.length + chunk.length
		);
		callback();
	}

	public get writeableObjectMode() {
		return true;
	}

	public _flush(callback: TransformCallback) {
		yauzl.fromBuffer(
			this.buffer,
			{ lazyEntries: true },
			(err?: Error | null, zipFile?: yauzl.ZipFile): void => {
				if (err || !zipFile) {
					callback(err);
					throw err;
				}
				zipFile.readEntry();
				zipFile.on("entry", (entry: Entry) => {
					if (
						!/\/$/.test(entry.fileName) &&
						(this.target === entry.fileName ||
							entry.fileName.endsWith(`\/${this.target}`))
					) {
						zipFile.openReadStream(
							entry,
							(entryErr?: Error | null, readStream?: Readable) => {
								if (entryErr) {
									throw entryErr;
								}

								readStream?.on("end", () => {
									zipFile.close();
									callback();
								});
								readStream?.on("data", (chunk: any) => {
									this.push(chunk);
								});
								readStream?.on("error", (readErr: Error) => {
									callback(readErr);
								});
							}
						);
					} else {
						zipFile.readEntry();
					}
				});
				zipFile.on("error", (entryErr: Error) => {
					callback(entryErr);
				});
			}
		);
	}
}
