import IBelfioreCity from "../interfaces/belfiore-city.interface";
import IBelfioreCountry from "../interfaces/belfiore-country.interface";
import IBelfiorePlace from "../interfaces/belfiore-place.interface";

type BelfiorePlace = IBelfiorePlace | IBelfioreCity | IBelfioreCountry;

export default BelfiorePlace;
