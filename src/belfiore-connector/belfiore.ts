import CITIES_COUNTRIES from "../../asset/cities-countries.json";
import BelfioreConnector from "./classes/belfiore-connector.class";
import BelfioreConnectorConfig from "./types/belfiore-connector-config.type";
import BelfiorePlace from "./types/belfiore-place.type";

export const Belfiore = new BelfioreConnector(CITIES_COUNTRIES as BelfioreConnectorConfig);
export {
    BelfioreConnector,
    BelfiorePlace,
};
