import cfDecodeTest from "./parser/cfDecode.test";
import cfDeomocodeTest from "./parser/cfDeomocode.test";
import cfOmocodeTest from "./parser/cfOmocode.test";
import cfOmocodeIdTest from "./parser/cfOmocodeId.test";
import cfToBirthDateTest from "./parser/cfToBirthDate.test";
import cfToFirstNameTest from "./parser/cfToFirstName.test";
import cfToGenderTest from "./parser/cfToGender.test";
import cfToLastNameTest from "./parser/cfToLastName.test";
import dateGenderToCfTest from "./parser/dateGenderToCf.test";
import dayGenderToCfTest from "./parser/dayGenderToCf.test";
import encodeCfTest from "./parser/encodeCf.test";
import firstNameToCfTest from "./parser/firstNameToCf.test";
import lastNameToCfTest from "./parser/lastNameToCf.test";
import monthToCfTest from "./parser/monthToCf.test";
import bitmapTest from "./parser/omocode-bitmap.test";
import parseDateTest from "./parser/parseDate.test";
import parsePlaceTest from "./parser/parsePlace.test";
import placeToCfTest from "./parser/placeToCf.test";
import yearToCfTest from "./parser/yearToCf.test";

describe("Parser", () => {
    describe("constants", () => bitmapTest());

    describe("methods from CF", () => {
        cfDeomocodeTest();
        cfOmocodeIdTest();
        cfOmocodeTest();
        cfToLastNameTest();
        cfToFirstNameTest();
        cfToGenderTest();
        cfToBirthDateTest();
        cfDecodeTest();
    });

    describe("methods to CF", () => {
        lastNameToCfTest();
        firstNameToCfTest();
        yearToCfTest();
        monthToCfTest();
        dayGenderToCfTest();
        dateGenderToCfTest();
        placeToCfTest();
        encodeCfTest();
    });

    describe("utils", () => {
        parsePlaceTest();
        parseDateTest();
    });
});
