import cfDateGender from "./validator/cfDateGender.test";
import cfDay from "./validator/cfDay.test";
import cfDayGender from "./validator/cfDayGender.test";
import cfMonth from "./validator/cfMonth.test";
import cfName from "./validator/cfName.test";
import cfPlace from "./validator/cfPlace.test";
import cfSurname from "./validator/cfSurname.test";
import cfYear from "./validator/cfYear.test";
import codiceFiscale from "./validator/codiceFiscale.test";
import date from "./validator/date.test";
import gender from "./validator/gender.test";
import isValid from "./validator/isValid.test";
import name from "./validator/name.test";
import place from "./validator/place.test";
import surname from "./validator/surname.test";

describe("CodiceFiscaleUtils:Validator", () => {
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
        isValid(),
    ]));
});
