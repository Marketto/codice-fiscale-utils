import IBelfioreCommonPlace from "./belfiore-common-place.interface";
export default interface IBelfioreCity extends IBelfioreCommonPlace {
    iso3166: undefined;
    province: string;
}
