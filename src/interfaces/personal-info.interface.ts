import DateDay from "../types/date-day.type";
import DateMonth from "../types/date-month.type";
import Genders from "../types/genders.type";

export default interface IPersonalInfo {
    name?: string;
    lastName?: string;

    date?: Date;
    day?: DateDay;
    month?: DateMonth;
    year?: number;

    gender?: Genders;
    place?: string;
}
