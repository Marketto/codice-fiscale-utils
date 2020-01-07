import IBelfioreConnectorCommonConfig from "./belfiore-connector-common-config.interface";

export default interface IBelfioreConnectorBaseConfig extends IBelfioreConnectorCommonConfig {
    province: undefined;
    codeMatcher: undefined;
}
