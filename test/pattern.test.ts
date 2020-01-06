import cfDateGender from "./pattern/cfDateGender.test";
import cfDay from "./pattern/cfDay.test";
import cfDayGender from "./pattern/cfDayGender.test";
import cfMonth from "./pattern/cfMonth.test";
import cfName from "./pattern/cfName.test";
import cfPlace from "./pattern/cfPlace.test";
import cfSurname from "./pattern/cfSurname.test";
import cfYear from "./pattern/cfYear.test";
import codiceFiscale from "./pattern/codiceFiscale.test";
import date from "./pattern/date.test";
import firstName from "./pattern/firstName.test";
import gender from "./pattern/gender.test";
import lastName from "./pattern/lastName.test";
import place from "./pattern/place.test";

describe("CodiceFiscaleUtils:Pattern", () => {
    describe("codiceFiscale", () => Promise.all([
        cfSurname(),
        cfName(),
        cfYear(),
        cfMonth(),
        cfDay(),
        cfDayGender(),
        cfDateGender(),
        cfPlace(),
        codiceFiscale(),
    ]));
    describe("personal infos", () => Promise.all([
        lastName(),
        firstName(),
        date(),
        gender(),
        place(),
    ]));
});
