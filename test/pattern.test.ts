import cfDateGender from "./pattern/cfDateGender.test";
import cfDay from "./pattern/cfDay.test";
import cfDayGender from "./pattern/cfDayGender.test";
import cfFirstName from "./pattern/cfFirstName.test";
import cfLastName from "./pattern/cfLastName.test";
import cfMonth from "./pattern/cfMonth.test";
import cfPlace from "./pattern/cfPlace.test";
import cfYear from "./pattern/cfYear.test";
import codiceFiscale from "./pattern/codiceFiscale.test";
import date from "./pattern/date.test";
import firstName from "./pattern/firstName.test";
import gender from "./pattern/gender.test";
import lastName from "./pattern/lastName.test";
import place from "./pattern/place.test";

describe("Pattern", () => {
    describe("codiceFiscale", () => {
        cfLastName();
        cfFirstName();
        cfYear();
        cfMonth();
        cfDay();
        cfDayGender();
        cfDateGender();
        cfPlace();
        codiceFiscale();
    });
    describe("personal infos", () => {
        lastName();
        firstName();
        date();
        gender();
        place();
    });
});
