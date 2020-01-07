import IBelfioreConnectorCommonConfig from "./belfiore-connector-common-config.interface";

export default interface IBelfioreConnectorProvinceConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher: undefined;
    province: string;
}
