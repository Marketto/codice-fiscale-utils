import cfDecode from "./parser/cfDecode.test";
import cfDeomocode from "./parser/cfDeomocode.test";
import cfToBirthDate from "./parser/cfToBirthDate.test";
import cfToGender from "./parser/cfToGender.test";
import cfToName from "./parser/cfToName.test";
import cfToSurname from "./parser/cfToSurname.test";
import dateGenderToCf from "./parser/dateGenderToCf.test";
import dayGenderToCf from "./parser/dayGenderToCf.test";
import encodeCf from "./parser/encodeCf.test";
import monthToCf from "./parser/monthToCf.test";
import nameToCf from "./parser/nameToCf.test";
import bitmap from "./parser/omocode-bitmap.test";
import placeToCf from "./parser/placeToCf.test";
import surnameToCf from "./parser/surnameToCf.test";
import yearToCf from "./parser/yearToCf.test";

describe("CodiceFiscaleUtils:Parser", () => {
    describe("constants", () => bitmap());

    describe("methods from CF", () => Promise.all([
        cfDeomocode(),
        cfToSurname(),
        cfToName(),
        cfToGender(),
        cfToBirthDate(),
        cfDecode(),
    ]));

    describe("methods to CF", () => Promise.all([
        surnameToCf(),
        nameToCf(),
        yearToCf(),
        monthToCf(),
        dayGenderToCf(),
        dateGenderToCf(),
        placeToCf(),
        encodeCf(),
    ]));
});
