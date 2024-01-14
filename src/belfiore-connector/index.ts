import CITIES_COUNTRIES from "../../asset/cities-countries";
import BelfioreConnector from "./classes/belfiore-connector.class";
import { type BelfioreConnectorConfig } from "./types/belfiore-connector-config.type";
import { type BelfiorePlace } from "./types/belfiore-place.type";

export const Belfiore = new BelfioreConnector(CITIES_COUNTRIES as BelfioreConnectorConfig);
export {
    BelfioreConnector,
};
export type {
    BelfiorePlace,
};
