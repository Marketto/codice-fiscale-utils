import IBelfioreCommonPlace from "./belfiore-common-place.interface";
export default interface IBelfioreCountry extends IBelfioreCommonPlace {
    iso3166: string;
    province: undefined;
}
