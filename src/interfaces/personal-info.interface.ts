import { DateDay, DateMonth } from "../date-utils/";
import Genders from "../types/genders.type";

export default interface IPersonalInfo {
    firstName?: string;
    lastName?: string;

    date?: Date;
    day?: DateDay;
    month?: DateMonth;
    year?: number;

    gender?: Genders;
    place?: string;
    omocodeId?: number;
}
