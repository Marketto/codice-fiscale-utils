import IBelfioreConnectorBaseConfig from "../interfaces/belfiore-connector-base-config.interface";
import IBelfioreConnectorMatcherConfig from "../interfaces/belfiore-connector-matcher-config.interface";
import IBelfioreConnectorProvinceConfig from "../interfaces/belfiore-connector-province-config.interface";

type BelfioreConnectorConfig = IBelfioreConnectorBaseConfig
    | IBelfioreConnectorProvinceConfig
    | IBelfioreConnectorMatcherConfig;

export default BelfioreConnectorConfig;
