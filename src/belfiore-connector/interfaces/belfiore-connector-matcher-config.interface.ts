import IBelfioreConnectorCommonConfig from "./belfiore-connector-common-config.interface";

export default interface IBelfioreConnectorMatcherConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher: RegExp;
    province: undefined;
}
