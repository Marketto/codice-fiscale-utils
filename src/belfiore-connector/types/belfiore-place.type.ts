import type IBelfioreCity from "../interfaces/belfiore-city.interface";
import type IBelfioreCountry from "../interfaces/belfiore-country.interface";
import type IBelfiorePlace from "../interfaces/belfiore-place.interface";

type BelfiorePlace = IBelfiorePlace | IBelfioreCity | IBelfioreCountry;

export type {BelfiorePlace};
