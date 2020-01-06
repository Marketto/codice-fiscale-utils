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
import gender from "./pattern/gender.test";
import name from "./pattern/name.test";
import place from "./pattern/place.test";
import surname from "./pattern/surname.test";

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
        surname(),
        name(),
        date(),
        gender(),
        place(),
    ]));
});
