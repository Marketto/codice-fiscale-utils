import CITIES_COUNTRIES from "../../asset/cities-countries.json";
import BelfioreConnector from "./classes/belfiore-connector.class";

export const Belfiore = new BelfioreConnector(CITIES_COUNTRIES);
export { BelfioreConnector };
