import { DateDay } from "../date-utils/";
import GenderWeight from "../enums/gender-weight.enum";
import Genders from "../types/genders.type";

class Gender {
    public static getDay(genderDay: number): DateDay | null {
        const plainDay = genderDay % GenderWeight.F;
        return (plainDay > 0 && plainDay <= this.MAX_MONTH_DAY) ? plainDay as DateDay : null;
    }

    public static getGender(genderDay: number): Genders | null {
        return this.toArray()
            .find((gender) => genderDay >= GenderWeight[gender] &&
                genderDay <= GenderWeight[gender] + this.MAX_MONTH_DAY)
            || null;
    }

    public static genderizeDay(day: number, gender: Genders): number {
        return day + GenderWeight[gender];
    }

    public static toArray(): Genders[] {
        return ["M", "F"];
    }

    private static MAX_MONTH_DAY: number = 31;
}

export default Gender;
