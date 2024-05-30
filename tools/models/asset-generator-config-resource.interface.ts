import type { ColumnType } from "./column-type.type";

export interface IAssetGeneratorConfigResource {
	/**
	 * @description Endpoint to download zip, xlsx or csv resource
	 */
	uri: string;
	/**
	 * @description Target file name inside zip file, used if uri point to a zip file
	 */
	target?: string;
	/**
	 * @description License source code from listed licenses
	 */
	defaultSourceCode: string;
	/**
	 * @description CSV value delimiter, default: ';'
	 */
	delimiter?: string;

	/**
	 * @description Column definition mapping
	 */
	columns: {
		/**
		 * @description Source column/field name
		 */
		[targetColName: string]: {
			/**
			 * @description Mapped and parsed destination field
			 */
			field: string;
			/**
			 * @description Source data type for proper parsing
			 */
			type: ColumnType;
		};
	};
}
