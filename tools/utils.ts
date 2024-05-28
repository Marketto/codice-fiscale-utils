import _ from "lodash";
import chardet from "chardet";

export const DEFAULT_CREATION_DATE = "1861-01-01";

export interface IPartialCompressedDataset {
	belfioreCode: string;
	name: string;
	dataSource: number;
	creationDate: string;
	expirationDate: string;
	provinceOrCountry: string;
}

export interface ICompressedDataset {
	belfioreCode: string;
	name: string;
	dataSource: string;
	creationDate?: string | undefined;
	expirationDate?: string | undefined;
	provinceOrCountry: string;
}

export const cleanField = (value: any) => {
	if (typeof value === "number" && isNaN(value)) {
		return;
	}
	if (typeof value !== "string") {
		return value;
	}
	const trimmed = (value || "").trim();
	if (/^(?:n\.?\s*d\.?|-)$/i.test(value)) {
		return;
	}
	return trimmed || undefined;
};

export function cleanObject<
	T extends {
		[s: string]: unknown;
	}
>(obj: T): T {
	const out: any = {};
	Object.entries(obj).forEach(([key, value]) => {
		const cleanValue = cleanField(value);
		if (cleanValue !== undefined && cleanValue !== null) {
			out[key] = cleanValue;
		}
	});
	return out;
}

export const belfioreToInt = (code: string): number =>
	(code.charCodeAt(0) - 65) * 10 ** 3 + parseInt(code.substr(1), 10);

export const errorHandler = (err: NodeJS.ErrnoException | null): void => {
	if (err) {
		// tslint:disable-next-line: no-console
		console.error(err);
	}
};

export function toUtf8(text: Buffer): string;
export function toUtf8(buffer: string): string;
export function toUtf8(strBuffer: Buffer | string) {
	if (strBuffer === null || typeof strBuffer === "undefined") {
		return strBuffer;
	}

	const buffer = Buffer.isBuffer(strBuffer)
		? strBuffer
		: Buffer.from(strBuffer);

	const srcEnc = chardet.detect(buffer);
	const decoded = new TextDecoder(srcEnc as string).decode(buffer);

	if (
		!["ascii", "utf8"].includes(
			srcEnc?.toLowerCase()?.replace("-", "") as string
		)
	) {
		return strBuffer.toString();
	}

	return decoded;
}
