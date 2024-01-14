import type IBelfioreConnectorBaseConfig from "../interfaces/belfiore-connector-base-config.interface";
import type IBelfioreConnectorMatcherConfig from "../interfaces/belfiore-connector-matcher-config.interface";
import type IBelfioreConnectorProvinceConfig from "../interfaces/belfiore-connector-province-config.interface";

type BelfioreConnectorConfig = (IBelfioreConnectorBaseConfig
    | IBelfioreConnectorProvinceConfig
    | IBelfioreConnectorMatcherConfig) & ({} | { fromDate: never, toDate: never });

export type {BelfioreConnectorConfig};
