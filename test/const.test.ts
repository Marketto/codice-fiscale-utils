import {
    CONSONANT_LIST,
    LEAP_YEAR_MATCHER,
    MONTH_30DAYS_LIST,
    MONTH_31DAYS_LIST,
    MONTH_LIST,
    OMOCODE_NON_ZERO_NUMBER_LIST,
    OMOCODE_NUMBER_LIST,
    OMOCODE_ZERO_LIST,
    PARTIAL_CF,
    PARTIAL_CF_FULL_NAME,
    VOWEL_LIST,
} from "../src/const/matcher.const";
import { expect } from "./utils";

describe("Const", () => {
    describe("validator", () => {
        describe("CONSONANT_LIST", () => {
            const consonantMatcher = new RegExp(`^[${CONSONANT_LIST}]$`, "i");
            it("Should match consonants", () => {
                consonantMatcher.test("B").should.be.ok;
                consonantMatcher.test("C").should.be.ok;
                consonantMatcher.test("D").should.be.ok;
                consonantMatcher.test("F").should.be.ok;
                consonantMatcher.test("G").should.be.ok;
                consonantMatcher.test("H").should.be.ok;
                consonantMatcher.test("J").should.be.ok;
                consonantMatcher.test("K").should.be.ok;
                consonantMatcher.test("L").should.be.ok;
                consonantMatcher.test("M").should.be.ok;
                consonantMatcher.test("N").should.be.ok;
                consonantMatcher.test("P").should.be.ok;
                consonantMatcher.test("Q").should.be.ok;
                consonantMatcher.test("R").should.be.ok;
                consonantMatcher.test("S").should.be.ok;
                consonantMatcher.test("T").should.be.ok;
                consonantMatcher.test("V").should.be.ok;
                consonantMatcher.test("W").should.be.ok;
                consonantMatcher.test("X").should.be.ok;
                consonantMatcher.test("Y").should.be.ok;
                consonantMatcher.test("Z").should.be.ok;
            });
            it("Should not match vowels", () => {
                consonantMatcher.test("A").should.be.not.ok;
                consonantMatcher.test("E").should.be.not.ok;
                consonantMatcher.test("I").should.be.not.ok;
                consonantMatcher.test("O").should.be.not.ok;
                consonantMatcher.test("U").should.be.not.ok;
            });
            it("Should not match numbers or other symbols", () => {
                consonantMatcher.test("1").should.be.not.ok;
                consonantMatcher.test("%").should.be.not.ok;
                consonantMatcher.test("ò").should.be.not.ok;
                consonantMatcher.test("Б").should.be.not.ok;
                consonantMatcher.test("Ж").should.be.not.ok;
            });
        });

        describe("VOWEL_LIST", () => {
            const vowelMatcher = new RegExp(`^[${VOWEL_LIST}]$`, "i");
            it("Should match vowels", () => {
                vowelMatcher.test("A").should.be.ok;
                vowelMatcher.test("E").should.be.ok;
                vowelMatcher.test("I").should.be.ok;
                vowelMatcher.test("O").should.be.ok;
                vowelMatcher.test("U").should.be.ok;
            });
            it("Should not match consonants", () => {
                vowelMatcher.test("B").should.not.be.ok;
                vowelMatcher.test("C").should.not.be.ok;
                vowelMatcher.test("D").should.not.be.ok;
                vowelMatcher.test("F").should.not.be.ok;
                vowelMatcher.test("G").should.not.be.ok;
                vowelMatcher.test("H").should.not.be.ok;
                vowelMatcher.test("J").should.not.be.ok;
                vowelMatcher.test("K").should.not.be.ok;
                vowelMatcher.test("L").should.not.be.ok;
                vowelMatcher.test("M").should.not.be.ok;
                vowelMatcher.test("N").should.not.be.ok;
                vowelMatcher.test("P").should.not.be.ok;
                vowelMatcher.test("Q").should.not.be.ok;
                vowelMatcher.test("R").should.not.be.ok;
                vowelMatcher.test("S").should.not.be.ok;
                vowelMatcher.test("T").should.not.be.ok;
                vowelMatcher.test("V").should.not.be.ok;
                vowelMatcher.test("W").should.not.be.ok;
                vowelMatcher.test("X").should.not.be.ok;
                vowelMatcher.test("Y").should.not.be.ok;
                vowelMatcher.test("Z").should.not.be.ok;
            });
            it("Should not match numbers or other symbols", () => {
                vowelMatcher.test("9").should.be.not.ok;
                vowelMatcher.test("Ё").should.be.not.ok;
                vowelMatcher.test("ò").should.be.not.ok;
                vowelMatcher.test("Е").should.be.not.ok;
                vowelMatcher.test("Я").should.be.not.ok;
            });
        });

        describe("OMOCODE_NUMBER_LIST", () => {
            const omocodeMatcher = new RegExp(`^[${OMOCODE_NUMBER_LIST}]$`, "i");
            it("Should match numbers", () => {
                omocodeMatcher.test("0").should.be.ok;
                omocodeMatcher.test("1").should.be.ok;
                omocodeMatcher.test("2").should.be.ok;
                omocodeMatcher.test("3").should.be.ok;
                omocodeMatcher.test("4").should.be.ok;
                omocodeMatcher.test("5").should.be.ok;
                omocodeMatcher.test("6").should.be.ok;
                omocodeMatcher.test("7").should.be.ok;
                omocodeMatcher.test("8").should.be.ok;
                omocodeMatcher.test("9").should.be.ok;
            });
            it("Should match omocodes", () => {
                omocodeMatcher.test("L").should.be.ok;
                omocodeMatcher.test("M").should.be.ok;
                omocodeMatcher.test("N").should.be.ok;
                omocodeMatcher.test("P").should.be.ok;
                omocodeMatcher.test("Q").should.be.ok;
                omocodeMatcher.test("R").should.be.ok;
                omocodeMatcher.test("S").should.be.ok;
                omocodeMatcher.test("T").should.be.ok;
                omocodeMatcher.test("U").should.be.ok;
                omocodeMatcher.test("V").should.be.ok;
            });
            it("Should not match other letters nor symbols", () => {
                omocodeMatcher.test("Ё").should.be.not.ok;
                omocodeMatcher.test("ò").should.be.not.ok;
                omocodeMatcher.test("Е").should.be.not.ok;
                omocodeMatcher.test("Я").should.be.not.ok;
                omocodeMatcher.test("A").should.be.not.ok;
                omocodeMatcher.test("B").should.be.not.ok;
                omocodeMatcher.test("C").should.be.not.ok;
                omocodeMatcher.test("D").should.be.not.ok;
                omocodeMatcher.test("E").should.be.not.ok;
                omocodeMatcher.test("F").should.be.not.ok;
                omocodeMatcher.test("G").should.be.not.ok;
                omocodeMatcher.test("H").should.be.not.ok;
                omocodeMatcher.test("I").should.be.not.ok;
                omocodeMatcher.test("J").should.be.not.ok;
                omocodeMatcher.test("K").should.be.not.ok;
                omocodeMatcher.test("O").should.be.not.ok;
                omocodeMatcher.test("W").should.be.not.ok;
                omocodeMatcher.test("X").should.be.not.ok;
                omocodeMatcher.test("Y").should.be.not.ok;
                omocodeMatcher.test("Z").should.be.not.ok;
            });
        });

        describe("OMOCODE_NON_ZERO_NUMBER_LIST", () => {
            const omocodeMatcher = new RegExp(`^[${OMOCODE_NON_ZERO_NUMBER_LIST}]$`, "i");
            it("Should match numbers but 0", () => {
                omocodeMatcher.test("1").should.be.ok;
                omocodeMatcher.test("2").should.be.ok;
                omocodeMatcher.test("3").should.be.ok;
                omocodeMatcher.test("4").should.be.ok;
                omocodeMatcher.test("5").should.be.ok;
                omocodeMatcher.test("6").should.be.ok;
                omocodeMatcher.test("7").should.be.ok;
                omocodeMatcher.test("8").should.be.ok;
                omocodeMatcher.test("9").should.be.ok;
            });
            it("Should match omocodes", () => {
                omocodeMatcher.test("M").should.be.ok;
                omocodeMatcher.test("N").should.be.ok;
                omocodeMatcher.test("P").should.be.ok;
                omocodeMatcher.test("Q").should.be.ok;
                omocodeMatcher.test("R").should.be.ok;
                omocodeMatcher.test("S").should.be.ok;
                omocodeMatcher.test("T").should.be.ok;
                omocodeMatcher.test("U").should.be.ok;
                omocodeMatcher.test("V").should.be.ok;
            });
            it("Should not match 0, its omocode, other letters nor symbols", () => {
                omocodeMatcher.test("0").should.be.not.ok;
                omocodeMatcher.test("L").should.be.not.ok;
                omocodeMatcher.test("Ё").should.be.not.ok;
                omocodeMatcher.test("ò").should.be.not.ok;
                omocodeMatcher.test("Е").should.be.not.ok;
                omocodeMatcher.test("Я").should.be.not.ok;
                omocodeMatcher.test("A").should.be.not.ok;
                omocodeMatcher.test("B").should.be.not.ok;
                omocodeMatcher.test("C").should.be.not.ok;
                omocodeMatcher.test("D").should.be.not.ok;
                omocodeMatcher.test("E").should.be.not.ok;
                omocodeMatcher.test("F").should.be.not.ok;
                omocodeMatcher.test("G").should.be.not.ok;
                omocodeMatcher.test("H").should.be.not.ok;
                omocodeMatcher.test("I").should.be.not.ok;
                omocodeMatcher.test("J").should.be.not.ok;
                omocodeMatcher.test("K").should.be.not.ok;
                omocodeMatcher.test("O").should.be.not.ok;
                omocodeMatcher.test("W").should.be.not.ok;
                omocodeMatcher.test("X").should.be.not.ok;
                omocodeMatcher.test("Y").should.be.not.ok;
                omocodeMatcher.test("Z").should.be.not.ok;
            });
        });

        describe("OMOCODE_ZERO_LIST", () => {
            const omocodeMatcher = new RegExp(`^[${OMOCODE_ZERO_LIST}]$`, "i");
            it("Should match only 0 and its omocode", () => {
                omocodeMatcher.test("0").should.be.ok;
                omocodeMatcher.test("L").should.be.ok;
            });
            it("Should not match numbers 1 to 9 and their omocodes", () => {
                omocodeMatcher.test("1").should.be.not.ok;
                omocodeMatcher.test("2").should.be.not.ok;
                omocodeMatcher.test("3").should.be.not.ok;
                omocodeMatcher.test("4").should.be.not.ok;
                omocodeMatcher.test("5").should.be.not.ok;
                omocodeMatcher.test("6").should.be.not.ok;
                omocodeMatcher.test("7").should.be.not.ok;
                omocodeMatcher.test("8").should.be.not.ok;
                omocodeMatcher.test("9").should.be.not.ok;
                omocodeMatcher.test("M").should.be.not.ok;
                omocodeMatcher.test("N").should.be.not.ok;
                omocodeMatcher.test("P").should.be.not.ok;
                omocodeMatcher.test("Q").should.be.not.ok;
                omocodeMatcher.test("R").should.be.not.ok;
                omocodeMatcher.test("S").should.be.not.ok;
                omocodeMatcher.test("T").should.be.not.ok;
                omocodeMatcher.test("U").should.be.not.ok;
                omocodeMatcher.test("V").should.be.not.ok;
            });
        });

        describe("MONTH_LIST", () => {
            const monthCodeMatcher = new RegExp(`^[${MONTH_LIST}]$`, "i");
            it("Should match month codes", () => {
                monthCodeMatcher.test("A").should.be.ok;
                monthCodeMatcher.test("B").should.be.ok;
                monthCodeMatcher.test("C").should.be.ok;
                monthCodeMatcher.test("D").should.be.ok;
                monthCodeMatcher.test("E").should.be.ok;
                monthCodeMatcher.test("H").should.be.ok;
                monthCodeMatcher.test("L").should.be.ok;
                monthCodeMatcher.test("M").should.be.ok;
                monthCodeMatcher.test("P").should.be.ok;
                monthCodeMatcher.test("R").should.be.ok;
                monthCodeMatcher.test("S").should.be.ok;
                monthCodeMatcher.test("T").should.be.ok;
            });
            it("Should not match numbers nor other letter nor symbols", () => {
                monthCodeMatcher.test("0").should.be.not.ok;
                monthCodeMatcher.test("1").should.be.not.ok;
                monthCodeMatcher.test("2").should.be.not.ok;
                monthCodeMatcher.test("3").should.be.not.ok;
                monthCodeMatcher.test("4").should.be.not.ok;
                monthCodeMatcher.test("5").should.be.not.ok;
                monthCodeMatcher.test("6").should.be.not.ok;
                monthCodeMatcher.test("7").should.be.not.ok;
                monthCodeMatcher.test("8").should.be.not.ok;
                monthCodeMatcher.test("9").should.be.not.ok;
                monthCodeMatcher.test("Ё").should.be.not.ok;
                monthCodeMatcher.test("ò").should.be.not.ok;
                monthCodeMatcher.test("&").should.be.not.ok;
                monthCodeMatcher.test("Я").should.be.not.ok;
                monthCodeMatcher.test("F").should.be.not.ok;
                monthCodeMatcher.test("G").should.be.not.ok;
                monthCodeMatcher.test("I").should.be.not.ok;
                monthCodeMatcher.test("J").should.be.not.ok;
                monthCodeMatcher.test("K").should.be.not.ok;
                monthCodeMatcher.test("N").should.be.not.ok;
                monthCodeMatcher.test("O").should.be.not.ok;
                monthCodeMatcher.test("Q").should.be.not.ok;
                monthCodeMatcher.test("U").should.be.not.ok;
                monthCodeMatcher.test("V").should.be.not.ok;
                monthCodeMatcher.test("W").should.be.not.ok;
                monthCodeMatcher.test("X").should.be.not.ok;
                monthCodeMatcher.test("Y").should.be.not.ok;
                monthCodeMatcher.test("Z").should.be.not.ok;
            });
        });

        describe("MONTH_30DAYS_LIST", () => {
            const monthCodeMatcher = new RegExp(`^[${MONTH_30DAYS_LIST}]$`, "i");
            it("Should match only 30 days month codes", () => {
                monthCodeMatcher.test("D").should.be.ok;
                monthCodeMatcher.test("H").should.be.ok;
                monthCodeMatcher.test("P").should.be.ok;
                monthCodeMatcher.test("S").should.be.ok;
            });
            it("Should not match month codes having less or more than 30 days", () => {
                monthCodeMatcher.test("A").should.be.not.ok;
                monthCodeMatcher.test("B").should.be.not.ok;
                monthCodeMatcher.test("C").should.be.not.ok;
                monthCodeMatcher.test("E").should.be.not.ok;
                monthCodeMatcher.test("L").should.be.not.ok;
                monthCodeMatcher.test("M").should.be.not.ok;
                monthCodeMatcher.test("R").should.be.not.ok;
                monthCodeMatcher.test("T").should.be.not.ok;
            });
        });

        describe("MONTH_31DAYS_LIST", () => {
            const monthCodeMatcher = new RegExp(`^[${MONTH_31DAYS_LIST}]$`, "i");
            it("Should match only 31 days month codes", () => {
                monthCodeMatcher.test("A").should.be.ok;
                monthCodeMatcher.test("C").should.be.ok;
                monthCodeMatcher.test("E").should.be.ok;
                monthCodeMatcher.test("L").should.be.ok;
                monthCodeMatcher.test("M").should.be.ok;
                monthCodeMatcher.test("R").should.be.ok;
                monthCodeMatcher.test("T").should.be.ok;
            });
            it("Should not match month codes having less than 31 days", () => {
                monthCodeMatcher.test("B").should.be.not.ok;
                monthCodeMatcher.test("D").should.be.not.ok;
                monthCodeMatcher.test("H").should.be.not.ok;
                monthCodeMatcher.test("P").should.be.not.ok;
                monthCodeMatcher.test("S").should.be.not.ok;
            });
        });

        describe("LEAP_YEAR_MATCHER", () => {
            const yearMatcher = new RegExp(`^${LEAP_YEAR_MATCHER}$`, "i");
            it("Should match only leap years and all centuries", () => {
                yearMatcher.test("00").should.be.ok;
                yearMatcher.test("04").should.be.ok;
                yearMatcher.test("08").should.be.ok;
                yearMatcher.test("12").should.be.ok;
                yearMatcher.test("16").should.be.ok;
                yearMatcher.test("20").should.be.ok;
                yearMatcher.test("24").should.be.ok;
                yearMatcher.test("28").should.be.ok;
                yearMatcher.test("32").should.be.ok;
                yearMatcher.test("36").should.be.ok;
                yearMatcher.test("40").should.be.ok;
                yearMatcher.test("44").should.be.ok;
                yearMatcher.test("48").should.be.ok;
                yearMatcher.test("52").should.be.ok;
                yearMatcher.test("56").should.be.ok;
                yearMatcher.test("60").should.be.ok;
                yearMatcher.test("64").should.be.ok;
                yearMatcher.test("68").should.be.ok;
                yearMatcher.test("72").should.be.ok;
                yearMatcher.test("76").should.be.ok;
                yearMatcher.test("80").should.be.ok;
                yearMatcher.test("84").should.be.ok;
                yearMatcher.test("88").should.be.ok;
                yearMatcher.test("92").should.be.ok;
                yearMatcher.test("96").should.be.ok;
            });
            it("Should not match non-leap years and centuries", () => {
                yearMatcher.test("01").should.be.not.ok;
                yearMatcher.test("02").should.be.not.ok;
                yearMatcher.test("03").should.be.not.ok;
                yearMatcher.test("05").should.be.not.ok;
                yearMatcher.test("06").should.be.not.ok;
                yearMatcher.test("07").should.be.not.ok;
                yearMatcher.test("09").should.be.not.ok;
                yearMatcher.test("10").should.be.not.ok;
                yearMatcher.test("11").should.be.not.ok;
                yearMatcher.test("13").should.be.not.ok;
                yearMatcher.test("14").should.be.not.ok;
                yearMatcher.test("15").should.be.not.ok;
                yearMatcher.test("17").should.be.not.ok;
                yearMatcher.test("18").should.be.not.ok;
                yearMatcher.test("19").should.be.not.ok;
                yearMatcher.test("21").should.be.not.ok;
                yearMatcher.test("22").should.be.not.ok;
                yearMatcher.test("23").should.be.not.ok;
                yearMatcher.test("25").should.be.not.ok;
                yearMatcher.test("26").should.be.not.ok;
                yearMatcher.test("27").should.be.not.ok;
                yearMatcher.test("29").should.be.not.ok;
                yearMatcher.test("30").should.be.not.ok;
                yearMatcher.test("31").should.be.not.ok;
                yearMatcher.test("33").should.be.not.ok;
                yearMatcher.test("34").should.be.not.ok;
                yearMatcher.test("35").should.be.not.ok;
                yearMatcher.test("37").should.be.not.ok;
                yearMatcher.test("38").should.be.not.ok;
                yearMatcher.test("39").should.be.not.ok;
                yearMatcher.test("41").should.be.not.ok;
                yearMatcher.test("42").should.be.not.ok;
                yearMatcher.test("43").should.be.not.ok;
                yearMatcher.test("45").should.be.not.ok;
                yearMatcher.test("46").should.be.not.ok;
                yearMatcher.test("47").should.be.not.ok;
                yearMatcher.test("49").should.be.not.ok;
                yearMatcher.test("50").should.be.not.ok;
                yearMatcher.test("51").should.be.not.ok;
                yearMatcher.test("53").should.be.not.ok;
                yearMatcher.test("54").should.be.not.ok;
                yearMatcher.test("55").should.be.not.ok;
                yearMatcher.test("57").should.be.not.ok;
                yearMatcher.test("58").should.be.not.ok;
                yearMatcher.test("59").should.be.not.ok;
                yearMatcher.test("61").should.be.not.ok;
                yearMatcher.test("62").should.be.not.ok;
                yearMatcher.test("63").should.be.not.ok;
                yearMatcher.test("65").should.be.not.ok;
                yearMatcher.test("66").should.be.not.ok;
                yearMatcher.test("67").should.be.not.ok;
                yearMatcher.test("69").should.be.not.ok;
                yearMatcher.test("70").should.be.not.ok;
                yearMatcher.test("71").should.be.not.ok;
                yearMatcher.test("73").should.be.not.ok;
                yearMatcher.test("74").should.be.not.ok;
                yearMatcher.test("75").should.be.not.ok;
                yearMatcher.test("77").should.be.not.ok;
                yearMatcher.test("78").should.be.not.ok;
                yearMatcher.test("79").should.be.not.ok;
                yearMatcher.test("81").should.be.not.ok;
                yearMatcher.test("82").should.be.not.ok;
                yearMatcher.test("83").should.be.not.ok;
                yearMatcher.test("85").should.be.not.ok;
                yearMatcher.test("86").should.be.not.ok;
                yearMatcher.test("87").should.be.not.ok;
                yearMatcher.test("89").should.be.not.ok;
                yearMatcher.test("90").should.be.not.ok;
                yearMatcher.test("91").should.be.not.ok;
                yearMatcher.test("93").should.be.not.ok;
                yearMatcher.test("94").should.be.not.ok;
                yearMatcher.test("95").should.be.not.ok;
                yearMatcher.test("97").should.be.not.ok;
                yearMatcher.test("98").should.be.not.ok;
                yearMatcher.test("99").should.be.not.ok;
            });
        });

        describe("PARTIAL_CF_FULL_NAME", () => {
            const partialFullNameMatcher = new RegExp(`^${PARTIAL_CF_FULL_NAME}$`, "i");
            it("Should match partial valid CF", () => {
                partialFullNameMatcher.test("R").should.be.ok;
                partialFullNameMatcher.test("RS").should.be.ok;
                partialFullNameMatcher.test("RSS").should.be.ok;
                partialFullNameMatcher.test("RSSM").should.be.ok;
                partialFullNameMatcher.test("RSSMR").should.be.ok;
            });
        });

        describe("PARTIAL_CF", () => {
            const partialCFMatcher = new RegExp(`^(?:${PARTIAL_CF})$`, "i");
            it("Should match partial valid CF", () => {
                partialCFMatcher.test("R").should.be.ok;
                partialCFMatcher.test("RS").should.be.ok;
                partialCFMatcher.test("RSS").should.be.ok;
                partialCFMatcher.test("RSSM").should.be.ok;
                partialCFMatcher.test("RSSMR").should.be.ok;
                partialCFMatcher.test("RSSMRA").should.be.ok;
                partialCFMatcher.test("RSSMRA8").should.be.ok;
                partialCFMatcher.test("RSSMRA80").should.be.ok;
                partialCFMatcher.test("RSSMRA80A").should.be.ok;
                partialCFMatcher.test("RSSMRA80A0").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01H").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01H5").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01H50").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01H501").should.be.ok;
                partialCFMatcher.test("RSSMRA80A01H501U").should.be.ok;
                partialCFMatcher.test("rssmra80a01h501u").should.be.ok;
            });
        });
    });
});
