import { Transform, TransformCallback, TransformOptions } from "stream";
import * as XLSX from "xlsx";

export class XlsxToJson extends Transform {
	private chunks: Buffer[] = [];

	constructor(opts?: TransformOptions | undefined) {
		super({
			...(opts || {}),
			objectMode: true,
		});
	}

	_transform(
		chunk: Buffer,
		encoding: string,
		callback: TransformCallback
	): void {
		this.chunks.push(chunk);
		callback();
	}
	_flush(callback: TransformCallback): void {
		const buffer = Buffer.concat(this.chunks);
		const workbook = XLSX.read(buffer);
		const records = XLSX.utils.sheet_to_json(
			workbook.Sheets[workbook.SheetNames[0]]
		);
		records.forEach((record) => {
			this.push(record);
		});
		callback();
	}
}
