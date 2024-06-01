import type { IAssetGeneratorConfigResource } from "./asset-generator-config-resource.interface";
import { DataSourceCodeEnum } from "./data-source-code.enum";

export interface IAssetGeneratorConfigLicense {
	name: string;
	url: string;
	license: string;
	licenseUrl: string;
	termsAndConditions: string;
	authors?: string;
}

export interface IAssetGeneratorConfig {
	resourceGroupKey: string;
	resources: IAssetGeneratorConfigResource[];
	licenses: {
		[id in keyof typeof DataSourceCodeEnum]: IAssetGeneratorConfigLicense;
	};
	licenseFiles: {
		[id: string]: string;
	};
}
