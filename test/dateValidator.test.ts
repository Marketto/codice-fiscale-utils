import {
    DAY,
    HOURS,
    ISO8601_DATE_TIME,
    ISO8601_SHORT_DATE,
    MILLISECONDS,
    MINUTES,
    MONTH,
    MONTH_DAY,
    SECONDS,
    TIME,
    TIMEZONE,
    YEAR,
} from "../src/const/date-matcher.const";
import "./utils";

describe("CodiceFiscaleUtils:DATE_VALIDATOR", () => {
    describe("YEAR", () => {
        const yearMatcher = new RegExp(`^(?:${YEAR})$`, "u");
        it("Should match year 2016", () => {
            yearMatcher.test("2016").should.be.ok;
        });
        it("Should match year 1916", () => {
            yearMatcher.test("1916").should.be.ok;
        });
        it("Should match year 1744", () => {
            yearMatcher.test("1744").should.be.ok;
        });

        it("Should not match 0", () => {
            yearMatcher.test("0").should.be.false;
        });
        it("Should not match 00", () => {
            yearMatcher.test("00").should.be.false;
        });
        it("Should not match 000", () => {
            yearMatcher.test("000").should.be.false;
        });
        it("Should not match 0000", () => {
            yearMatcher.test("0000").should.be.false;
        });
        it("Should not match 1", () => {
            yearMatcher.test("1").should.be.false;
        });
        it("Should not match 01", () => {
            yearMatcher.test("01").should.be.false;
        });
        it("Should not match 001", () => {
            yearMatcher.test("001").should.be.false;
        });
        it("Should not match 0001", () => {
            yearMatcher.test("0001").should.be.false;
        });
        it("Should not match 11", () => {
            yearMatcher.test("11").should.be.false;
        });
        it("Should not match 011", () => {
            yearMatcher.test("011").should.be.false;
        });
        it("Should not match 0011", () => {
            yearMatcher.test("0011").should.be.false;
        });
        it("Should not match 99", () => {
            yearMatcher.test("99").should.be.false;
        });
        it("Should not match 099", () => {
            yearMatcher.test("099").should.be.false;
        });
        it("Should not match 0099", () => {
            yearMatcher.test("0099").should.be.false;
        });
        it("Should not match 310", () => {
            yearMatcher.test("310").should.be.false;
        });
        it("Should not match 0310", () => {
            yearMatcher.test("0310").should.be.false;
        });
        it("Should not match 799", () => {
            yearMatcher.test("799").should.be.false;
        });
        it("Should not match 0799", () => {
            yearMatcher.test("0799").should.be.false;
        });
        it("Should not match abcd", () => {
            yearMatcher.test("abcd").should.be.false;
        });
    });

    describe("MONTH", () => {
        const monthMatcher = new RegExp(`^(?:${MONTH})$`, "u");
        it("Should match month 01", () => {
            monthMatcher.test("01").should.be.ok;
        });
        it("Should match month 02", () => {
            monthMatcher.test("02").should.be.ok;
        });
        it("Should match month 03", () => {
            monthMatcher.test("03").should.be.ok;
        });
        it("Should match month 04", () => {
            monthMatcher.test("04").should.be.ok;
        });
        it("Should match month 05", () => {
            monthMatcher.test("05").should.be.ok;
        });
        it("Should match month 06", () => {
            monthMatcher.test("06").should.be.ok;
        });
        it("Should match month 07", () => {
            monthMatcher.test("07").should.be.ok;
        });
        it("Should match month 08", () => {
            monthMatcher.test("08").should.be.ok;
        });
        it("Should match month 09", () => {
            monthMatcher.test("09").should.be.ok;
        });
        it("Should match month 10", () => {
            monthMatcher.test("10").should.be.ok;
        });
        it("Should match month 11", () => {
            monthMatcher.test("11").should.be.ok;
        });
        it("Should match month 12", () => {
            monthMatcher.test("12").should.be.ok;
        });

        it("Should not match 0", () => {
            monthMatcher.test("0").should.be.false;
        });
        it("Should not match 00", () => {
            monthMatcher.test("00").should.be.false;
        });
        it("Should not match 13", () => {
            monthMatcher.test("13").should.be.false;
        });
        it("Should not match 71", () => {
            monthMatcher.test("71").should.be.false;
        });
        it("Should not match s7", () => {
            monthMatcher.test("s7").should.be.false;
        });
    });

    describe("DAY", () => {
        const dayMatcher = new RegExp(`^(?:${DAY})$`, "u");

        it("Should match day 01", () => {
            dayMatcher.test("01").should.be.ok;
        });
        it("Should match day 02", () => {
            dayMatcher.test("02").should.be.ok;
        });
        it("Should match day 03", () => {
            dayMatcher.test("03").should.be.ok;
        });
        it("Should match day 04", () => {
            dayMatcher.test("04").should.be.ok;
        });
        it("Should match day 05", () => {
            dayMatcher.test("05").should.be.ok;
        });
        it("Should match day 06", () => {
            dayMatcher.test("06").should.be.ok;
        });
        it("Should match day 07", () => {
            dayMatcher.test("07").should.be.ok;
        });
        it("Should match day 08", () => {
            dayMatcher.test("08").should.be.ok;
        });
        it("Should match day 09", () => {
            dayMatcher.test("09").should.be.ok;
        });
        it("Should match day 10", () => {
            dayMatcher.test("10").should.be.ok;
        });
        it("Should match day 11", () => {
            dayMatcher.test("11").should.be.ok;
        });
        it("Should match day 12", () => {
            dayMatcher.test("12").should.be.ok;
        });
        it("Should match day 13", () => {
            dayMatcher.test("13").should.be.ok;
        });
        it("Should match day 14", () => {
            dayMatcher.test("14").should.be.ok;
        });
        it("Should match day 15", () => {
            dayMatcher.test("15").should.be.ok;
        });
        it("Should match day 16", () => {
            dayMatcher.test("16").should.be.ok;
        });
        it("Should match day 17", () => {
            dayMatcher.test("17").should.be.ok;
        });
        it("Should match day 18", () => {
            dayMatcher.test("18").should.be.ok;
        });
        it("Should match day 19", () => {
            dayMatcher.test("19").should.be.ok;
        });
        it("Should match day 20", () => {
            dayMatcher.test("20").should.be.ok;
        });
        it("Should match day 21", () => {
            dayMatcher.test("21").should.be.ok;
        });
        it("Should match day 22", () => {
            dayMatcher.test("22").should.be.ok;
        });
        it("Should match day 23", () => {
            dayMatcher.test("23").should.be.ok;
        });
        it("Should match day 24", () => {
            dayMatcher.test("24").should.be.ok;
        });
        it("Should match day 25", () => {
            dayMatcher.test("25").should.be.ok;
        });
        it("Should match day 26", () => {
            dayMatcher.test("26").should.be.ok;
        });
        it("Should match day 27", () => {
            dayMatcher.test("27").should.be.ok;
        });
        it("Should match day 28", () => {
            dayMatcher.test("28").should.be.ok;
        });
        it("Should match day 29", () => {
            dayMatcher.test("29").should.be.ok;
        });
        it("Should match day 30", () => {
            dayMatcher.test("30").should.be.ok;
        });
        it("Should match day 31", () => {
            dayMatcher.test("31").should.be.ok;
        });
        it("Should not match 0, 00 nor day 32", () => {
            dayMatcher.test("0").should.be.false;
            dayMatcher.test("00").should.be.false;
            dayMatcher.test("32").should.be.false;
        });
    });

    describe("MONTH_DAY", () => {
        const monthDayMatcher = new RegExp(`^(?:${MONTH_DAY})$`, "u");

        it("Should match day 01-01", () => {
            monthDayMatcher.test("01-01").should.be.ok;
        });
        it("Should match day 02-02", () => {
            monthDayMatcher.test("02-02").should.be.ok;
        });
        it("Should match day 03-03", () => {
            monthDayMatcher.test("03-03").should.be.ok;
        });
        it("Should match day 04-04", () => {
            monthDayMatcher.test("04-04").should.be.ok;
        });
        it("Should match day 05-05", () => {
            monthDayMatcher.test("05-05").should.be.ok;
        });
        it("Should match day 06-06", () => {
            monthDayMatcher.test("06-06").should.be.ok;
        });
        it("Should match day 07-07", () => {
            monthDayMatcher.test("07-07").should.be.ok;
        });
        it("Should match day 08-08", () => {
            monthDayMatcher.test("08-08").should.be.ok;
        });
        it("Should match day 09-09", () => {
            monthDayMatcher.test("09-09").should.be.ok;
        });
        it("Should match day 10-10", () => {
            monthDayMatcher.test("10-10").should.be.ok;
        });
        it("Should match day 11-11", () => {
            monthDayMatcher.test("11-11").should.be.ok;
        });
        it("Should match day 12-12", () => {
            monthDayMatcher.test("12-12").should.be.ok;
        });
        it("Should match day 01-13", () => {
            monthDayMatcher.test("01-13").should.be.ok;
        });
        it("Should match day 02-14", () => {
            monthDayMatcher.test("02-14").should.be.ok;
        });
        it("Should match day 03-15", () => {
            monthDayMatcher.test("03-15").should.be.ok;
        });
        it("Should match day 04-16", () => {
            monthDayMatcher.test("04-16").should.be.ok;
        });
        it("Should match day 05-17", () => {
            monthDayMatcher.test("05-17").should.be.ok;
        });
        it("Should match day 06-18", () => {
            monthDayMatcher.test("06-18").should.be.ok;
        });
        it("Should match day 07-19", () => {
            monthDayMatcher.test("07-19").should.be.ok;
        });
        it("Should match day 08-20", () => {
            monthDayMatcher.test("08-20").should.be.ok;
        });
        it("Should match day 09-21", () => {
            monthDayMatcher.test("09-21").should.be.ok;
        });
        it("Should match day 10-22", () => {
            monthDayMatcher.test("10-22").should.be.ok;
        });
        it("Should match day 11-23", () => {
            monthDayMatcher.test("11-23").should.be.ok;
        });
        it("Should match day 12-24", () => {
            monthDayMatcher.test("12-24").should.be.ok;
        });
        it("Should match day 01-25", () => {
            monthDayMatcher.test("01-25").should.be.ok;
        });
        it("Should match day 02-26", () => {
            monthDayMatcher.test("02-26").should.be.ok;
        });
        it("Should match day 03-27", () => {
            monthDayMatcher.test("03-27").should.be.ok;
        });
        it("Should match day 04-28", () => {
            monthDayMatcher.test("04-28").should.be.ok;
        });
        it("Should match day 05-29", () => {
            monthDayMatcher.test("05-29").should.be.ok;
        });
        it("Should match day 06-30", () => {
            monthDayMatcher.test("06-30").should.be.ok;
        });
        it("Should match day 07-31", () => {
            monthDayMatcher.test("07-31").should.be.ok;
        });
        it("Should not match 0-0", () => {
            monthDayMatcher.test("0-0").should.be.false;
        });
        it("Should not match 00-00", () => {
            monthDayMatcher.test("00-00").should.be.false;
        });
        it("Should not match 01-32", () => {
            monthDayMatcher.test("01-32").should.be.false;
        });
        it("Should not match 01-00", () => {
            monthDayMatcher.test("01-00").should.be.false;
        });
        it("Should not match 00-01", () => {
            monthDayMatcher.test("00-01").should.be.false;
        });
        it("Should not match 13-00", () => {
            monthDayMatcher.test("13-00").should.be.false;
        });
        it("Should not match 13-07", () => {
            monthDayMatcher.test("13-07").should.be.false;
        });
        it("Should not match 16-32", () => {
            monthDayMatcher.test("16-32").should.be.false;
        });
        it("Should not match 02-30", () => {
            monthDayMatcher.test("02-30").should.be.false;
        });
        it("Should not match 02-31", () => {
            monthDayMatcher.test("02-31").should.be.false;
        });
        it("Should not match 04-31", () => {
            monthDayMatcher.test("04-31").should.be.false;
        });
        it("Should not match 06-31", () => {
            monthDayMatcher.test("06-31").should.be.false;
        });
        it("Should not match 09-31", () => {
            monthDayMatcher.test("09-31").should.be.false;
        });
        it("Should not match 11-31", () => {
            monthDayMatcher.test("11-31").should.be.false;
        });
        it("Should not match 87-94", () => {
            monthDayMatcher.test("87-94").should.be.false;
        });
        it("Should not match 0", () => {
            monthDayMatcher.test("0").should.be.false;
        });
        it("Should not match 0", () => {
            monthDayMatcher.test("0").should.be.false;
        });
        it("Should not match 00", () => {
            monthDayMatcher.test("00").should.be.false;
        });
        it("Should not match h3-l9", () => {
            monthDayMatcher.test("h3-l9").should.be.false;
        });
    });

    describe("HOURS", () => {
        const hoursMatcher = new RegExp(`^(?:${HOURS})$`, "u");
        it("Should match 00", () => {
            hoursMatcher.test("00").should.be.ok;
        });
        it("Should match 01", () => {
            hoursMatcher.test("01").should.be.ok;
        });
        it("Should match 02", () => {
            hoursMatcher.test("02").should.be.ok;
        });
        it("Should match 03", () => {
            hoursMatcher.test("03").should.be.ok;
        });
        it("Should match 04", () => {
            hoursMatcher.test("04").should.be.ok;
        });
        it("Should match 05", () => {
            hoursMatcher.test("05").should.be.ok;
        });
        it("Should match 06", () => {
            hoursMatcher.test("06").should.be.ok;
        });
        it("Should match 07", () => {
            hoursMatcher.test("07").should.be.ok;
        });
        it("Should match 08", () => {
            hoursMatcher.test("08").should.be.ok;
        });
        it("Should match 09", () => {
            hoursMatcher.test("09").should.be.ok;
        });
        it("Should match 10", () => {
            hoursMatcher.test("10").should.be.ok;
        });
        it("Should match 11", () => {
            hoursMatcher.test("11").should.be.ok;
        });
        it("Should match 12", () => {
            hoursMatcher.test("12").should.be.ok;
        });
        it("Should match 13", () => {
            hoursMatcher.test("13").should.be.ok;
        });
        it("Should match 14", () => {
            hoursMatcher.test("14").should.be.ok;
        });
        it("Should match 15", () => {
            hoursMatcher.test("15").should.be.ok;
        });
        it("Should match 16", () => {
            hoursMatcher.test("16").should.be.ok;
        });
        it("Should match 17", () => {
            hoursMatcher.test("17").should.be.ok;
        });
        it("Should match 18", () => {
            hoursMatcher.test("18").should.be.ok;
        });
        it("Should match 19", () => {
            hoursMatcher.test("19").should.be.ok;
        });
        it("Should match 20", () => {
            hoursMatcher.test("20").should.be.ok;
        });
        it("Should match 21", () => {
            hoursMatcher.test("21").should.be.ok;
        });
        it("Should match 22", () => {
            hoursMatcher.test("22").should.be.ok;
        });
        it("Should match 23", () => {
            hoursMatcher.test("23").should.be.ok;
        });

        it("Should not match 24", () => {
            hoursMatcher.test("24").should.be.false;
        });
        it("Should not match 25", () => {
            hoursMatcher.test("25").should.be.false;
        });
        it("Should not match 26", () => {
            hoursMatcher.test("26").should.be.false;
        });
        it("Should not match 27", () => {
            hoursMatcher.test("27").should.be.false;
        });
        it("Should not match 28", () => {
            hoursMatcher.test("28").should.be.false;
        });
        it("Should not match 29", () => {
            hoursMatcher.test("29").should.be.false;
        });
        it("Should not match 30", () => {
            hoursMatcher.test("30").should.be.false;
        });
        it("Should not match 0", () => {
            hoursMatcher.test("0").should.be.false;
        });
        it("Should not match fe", () => {
            hoursMatcher.test("fe").should.be.false;
        });
    });

    describe("MINUTES", () => {
        const minutesMatcher = new RegExp(`^(?:${MINUTES})$`, "u");
        it("Should match 00", () => {
            minutesMatcher.test("00").should.be.ok;
        });
        it("Should match 01", () => {
            minutesMatcher.test("01").should.be.ok;
        });
        it("Should match 02", () => {
            minutesMatcher.test("02").should.be.ok;
        });
        it("Should match 03", () => {
            minutesMatcher.test("03").should.be.ok;
        });
        it("Should match 04", () => {
            minutesMatcher.test("04").should.be.ok;
        });
        it("Should match 05", () => {
            minutesMatcher.test("05").should.be.ok;
        });
        it("Should match 06", () => {
            minutesMatcher.test("06").should.be.ok;
        });
        it("Should match 07", () => {
            minutesMatcher.test("07").should.be.ok;
        });
        it("Should match 08", () => {
            minutesMatcher.test("08").should.be.ok;
        });
        it("Should match 09", () => {
            minutesMatcher.test("09").should.be.ok;
        });
        it("Should match 10", () => {
            minutesMatcher.test("10").should.be.ok;
        });
        it("Should match 11", () => {
            minutesMatcher.test("11").should.be.ok;
        });
        it("Should match 12", () => {
            minutesMatcher.test("12").should.be.ok;
        });
        it("Should match 13", () => {
            minutesMatcher.test("13").should.be.ok;
        });
        it("Should match 14", () => {
            minutesMatcher.test("14").should.be.ok;
        });
        it("Should match 15", () => {
            minutesMatcher.test("15").should.be.ok;
        });
        it("Should match 16", () => {
            minutesMatcher.test("16").should.be.ok;
        });
        it("Should match 17", () => {
            minutesMatcher.test("17").should.be.ok;
        });
        it("Should match 18", () => {
            minutesMatcher.test("18").should.be.ok;
        });
        it("Should match 19", () => {
            minutesMatcher.test("19").should.be.ok;
        });
        it("Should match 20", () => {
            minutesMatcher.test("20").should.be.ok;
        });
        it("Should match 21", () => {
            minutesMatcher.test("21").should.be.ok;
        });
        it("Should match 22", () => {
            minutesMatcher.test("22").should.be.ok;
        });
        it("Should match 23", () => {
            minutesMatcher.test("23").should.be.ok;
        });
        it("Should match 24", () => {
            minutesMatcher.test("24").should.be.ok;
        });
        it("Should match 25", () => {
            minutesMatcher.test("25").should.be.ok;
        });
        it("Should match 26", () => {
            minutesMatcher.test("26").should.be.ok;
        });
        it("Should match 27", () => {
            minutesMatcher.test("27").should.be.ok;
        });
        it("Should match 28", () => {
            minutesMatcher.test("28").should.be.ok;
        });
        it("Should match 29", () => {
            minutesMatcher.test("29").should.be.ok;
        });
        it("Should match 30", () => {
            minutesMatcher.test("30").should.be.ok;
        });
        it("Should match 31", () => {
            minutesMatcher.test("31").should.be.ok;
        });
        it("Should match 32", () => {
            minutesMatcher.test("32").should.be.ok;
        });
        it("Should match 33", () => {
            minutesMatcher.test("33").should.be.ok;
        });
        it("Should match 34", () => {
            minutesMatcher.test("34").should.be.ok;
        });
        it("Should match 35", () => {
            minutesMatcher.test("35").should.be.ok;
        });
        it("Should match 36", () => {
            minutesMatcher.test("36").should.be.ok;
        });
        it("Should match 37", () => {
            minutesMatcher.test("37").should.be.ok;
        });
        it("Should match 38", () => {
            minutesMatcher.test("38").should.be.ok;
        });
        it("Should match 39", () => {
            minutesMatcher.test("39").should.be.ok;
        });
        it("Should match 40", () => {
            minutesMatcher.test("40").should.be.ok;
        });
        it("Should match 41", () => {
            minutesMatcher.test("41").should.be.ok;
        });
        it("Should match 42", () => {
            minutesMatcher.test("42").should.be.ok;
        });
        it("Should match 43", () => {
            minutesMatcher.test("43").should.be.ok;
        });
        it("Should match 44", () => {
            minutesMatcher.test("44").should.be.ok;
        });
        it("Should match 45", () => {
            minutesMatcher.test("45").should.be.ok;
        });
        it("Should match 46", () => {
            minutesMatcher.test("46").should.be.ok;
        });
        it("Should match 47", () => {
            minutesMatcher.test("47").should.be.ok;
        });
        it("Should match 48", () => {
            minutesMatcher.test("48").should.be.ok;
        });
        it("Should match 49", () => {
            minutesMatcher.test("49").should.be.ok;
        });
        it("Should match 50", () => {
            minutesMatcher.test("50").should.be.ok;
        });
        it("Should match 51", () => {
            minutesMatcher.test("51").should.be.ok;
        });
        it("Should match 52", () => {
            minutesMatcher.test("52").should.be.ok;
        });
        it("Should match 53", () => {
            minutesMatcher.test("53").should.be.ok;
        });
        it("Should match 54", () => {
            minutesMatcher.test("54").should.be.ok;
        });
        it("Should match 55", () => {
            minutesMatcher.test("55").should.be.ok;
        });
        it("Should match 56", () => {
            minutesMatcher.test("56").should.be.ok;
        });
        it("Should match 57", () => {
            minutesMatcher.test("57").should.be.ok;
        });
        it("Should match 58", () => {
            minutesMatcher.test("58").should.be.ok;
        });
        it("Should match 59", () => {
            minutesMatcher.test("59").should.be.ok;
        });

        it("Should not match 60", () => {
            minutesMatcher.test("60").should.be.false;
        });
        it("Should not match 90", () => {
            minutesMatcher.test("90").should.be.false;
        });
        it("Should not match 0", () => {
            minutesMatcher.test("0").should.be.false;
        });
        it("Should not match ds", () => {
            minutesMatcher.test("ds").should.be.false;
        });
    });

    describe("SECONDS", () => {
        const secondsMatcher = new RegExp(`^(?:${SECONDS})$`, "u");
        it("Should match 00", () => {
            secondsMatcher.test("00").should.be.ok;
        });
        it("Should match 01", () => {
            secondsMatcher.test("01").should.be.ok;
        });
        it("Should match 02", () => {
            secondsMatcher.test("02").should.be.ok;
        });
        it("Should match 03", () => {
            secondsMatcher.test("03").should.be.ok;
        });
        it("Should match 04", () => {
            secondsMatcher.test("04").should.be.ok;
        });
        it("Should match 05", () => {
            secondsMatcher.test("05").should.be.ok;
        });
        it("Should match 06", () => {
            secondsMatcher.test("06").should.be.ok;
        });
        it("Should match 07", () => {
            secondsMatcher.test("07").should.be.ok;
        });
        it("Should match 08", () => {
            secondsMatcher.test("08").should.be.ok;
        });
        it("Should match 09", () => {
            secondsMatcher.test("09").should.be.ok;
        });
        it("Should match 10", () => {
            secondsMatcher.test("10").should.be.ok;
        });
        it("Should match 11", () => {
            secondsMatcher.test("11").should.be.ok;
        });
        it("Should match 12", () => {
            secondsMatcher.test("12").should.be.ok;
        });
        it("Should match 13", () => {
            secondsMatcher.test("13").should.be.ok;
        });
        it("Should match 14", () => {
            secondsMatcher.test("14").should.be.ok;
        });
        it("Should match 15", () => {
            secondsMatcher.test("15").should.be.ok;
        });
        it("Should match 16", () => {
            secondsMatcher.test("16").should.be.ok;
        });
        it("Should match 17", () => {
            secondsMatcher.test("17").should.be.ok;
        });
        it("Should match 18", () => {
            secondsMatcher.test("18").should.be.ok;
        });
        it("Should match 19", () => {
            secondsMatcher.test("19").should.be.ok;
        });
        it("Should match 20", () => {
            secondsMatcher.test("20").should.be.ok;
        });
        it("Should match 21", () => {
            secondsMatcher.test("21").should.be.ok;
        });
        it("Should match 22", () => {
            secondsMatcher.test("22").should.be.ok;
        });
        it("Should match 23", () => {
            secondsMatcher.test("23").should.be.ok;
        });
        it("Should match 24", () => {
            secondsMatcher.test("24").should.be.ok;
        });
        it("Should match 25", () => {
            secondsMatcher.test("25").should.be.ok;
        });
        it("Should match 26", () => {
            secondsMatcher.test("26").should.be.ok;
        });
        it("Should match 27", () => {
            secondsMatcher.test("27").should.be.ok;
        });
        it("Should match 28", () => {
            secondsMatcher.test("28").should.be.ok;
        });
        it("Should match 29", () => {
            secondsMatcher.test("29").should.be.ok;
        });
        it("Should match 30", () => {
            secondsMatcher.test("30").should.be.ok;
        });
        it("Should match 31", () => {
            secondsMatcher.test("31").should.be.ok;
        });
        it("Should match 32", () => {
            secondsMatcher.test("32").should.be.ok;
        });
        it("Should match 33", () => {
            secondsMatcher.test("33").should.be.ok;
        });
        it("Should match 34", () => {
            secondsMatcher.test("34").should.be.ok;
        });
        it("Should match 35", () => {
            secondsMatcher.test("35").should.be.ok;
        });
        it("Should match 36", () => {
            secondsMatcher.test("36").should.be.ok;
        });
        it("Should match 37", () => {
            secondsMatcher.test("37").should.be.ok;
        });
        it("Should match 38", () => {
            secondsMatcher.test("38").should.be.ok;
        });
        it("Should match 39", () => {
            secondsMatcher.test("39").should.be.ok;
        });
        it("Should match 40", () => {
            secondsMatcher.test("40").should.be.ok;
        });
        it("Should match 41", () => {
            secondsMatcher.test("41").should.be.ok;
        });
        it("Should match 42", () => {
            secondsMatcher.test("42").should.be.ok;
        });
        it("Should match 43", () => {
            secondsMatcher.test("43").should.be.ok;
        });
        it("Should match 44", () => {
            secondsMatcher.test("44").should.be.ok;
        });
        it("Should match 45", () => {
            secondsMatcher.test("45").should.be.ok;
        });
        it("Should match 46", () => {
            secondsMatcher.test("46").should.be.ok;
        });
        it("Should match 47", () => {
            secondsMatcher.test("47").should.be.ok;
        });
        it("Should match 48", () => {
            secondsMatcher.test("48").should.be.ok;
        });
        it("Should match 49", () => {
            secondsMatcher.test("49").should.be.ok;
        });
        it("Should match 50", () => {
            secondsMatcher.test("50").should.be.ok;
        });
        it("Should match 51", () => {
            secondsMatcher.test("51").should.be.ok;
        });
        it("Should match 52", () => {
            secondsMatcher.test("52").should.be.ok;
        });
        it("Should match 53", () => {
            secondsMatcher.test("53").should.be.ok;
        });
        it("Should match 54", () => {
            secondsMatcher.test("54").should.be.ok;
        });
        it("Should match 55", () => {
            secondsMatcher.test("55").should.be.ok;
        });
        it("Should match 56", () => {
            secondsMatcher.test("56").should.be.ok;
        });
        it("Should match 57", () => {
            secondsMatcher.test("57").should.be.ok;
        });
        it("Should match 58", () => {
            secondsMatcher.test("58").should.be.ok;
        });
        it("Should match 59", () => {
            secondsMatcher.test("59").should.be.ok;
        });

        it("Should not match 60", () => {
            secondsMatcher.test("60").should.be.false;
        });
        it("Should not match 99", () => {
            secondsMatcher.test("99").should.be.false;
        });
        it("Should not match 0", () => {
            secondsMatcher.test("0").should.be.false;
        });
        it("Should not match ve", () => {
            secondsMatcher.test("ve").should.be.false;
        });
    });

    describe("MILLISECONDS", () => {
        const msMatcher = new RegExp(`^(?:${MILLISECONDS})$`, "u");
        it("Should match 000", () => {
            msMatcher.test("000").should.be.ok;
        });
        it("Should match 001", () => {
            msMatcher.test("001").should.be.ok;
        });
        it("Should match 007", () => {
            msMatcher.test("007").should.be.ok;
        });
        it("Should match 020", () => {
            msMatcher.test("013").should.be.ok;
        });
        it("Should match 020", () => {
            msMatcher.test("020").should.be.ok;
        });
        it("Should match 057", () => {
            msMatcher.test("057").should.be.ok;
        });
        it("Should match 099", () => {
            msMatcher.test("099").should.be.ok;
        });
        it("Should match 201", () => {
            msMatcher.test("201").should.be.ok;
        });
        it("Should match 570", () => {
            msMatcher.test("570").should.be.ok;
        });
        it("Should match 742", () => {
            msMatcher.test("742").should.be.ok;
        });
        it("Should match 999", () => {
            msMatcher.test("999").should.be.ok;
        });

        it("Should not match 0", () => {
            msMatcher.test("0").should.be.false;
        });
        it("Should not match 00", () => {
            msMatcher.test("00").should.be.false;
        });
        it("Should match 0000", () => {
            msMatcher.test("0000").should.be.false;
        });
        it("Should match 1000", () => {
            msMatcher.test("1000").should.be.false;
        });
        it("Should match few", () => {
            msMatcher.test("few").should.be.false;
        });
    });

    describe("TIMEZONE", () => {
        const tmzMatcher = new RegExp(`^(?:${TIMEZONE})$`, "u");
        it ("Should match Z", () => {
            tmzMatcher.test("Z").should.be.ok;
        });
        it ("Should match -03", () => {
            tmzMatcher.test("-03").should.be.ok;
        });
        it ("Should match +10", () => {
            tmzMatcher.test("+10").should.be.ok;
        });
        it ("Should match -0130", () => {
            tmzMatcher.test("-0130").should.be.ok;
        });
        it ("Should match +1145", () => {
            tmzMatcher.test("+1145").should.be.ok;
        });
        it ("Should match +08:15", () => {
            tmzMatcher.test("+08:15").should.be.ok;
        });
        it ("Should match -12:30", () => {
            tmzMatcher.test("-12:30").should.be.ok;
        });

        it ("Should not match T", () => {
            tmzMatcher.test("T").should.be.false;
        });
        it ("Should not match 3", () => {
            tmzMatcher.test("3").should.be.false;
        });
        it ("Should not match 7", () => {
            tmzMatcher.test("7").should.be.false;
        });
        it ("Should not match -4", () => {
            tmzMatcher.test("-4").should.be.false;
        });
        it ("Should not match +73", () => {
            tmzMatcher.test("+73").should.be.false;
        });
        it ("Should not match -112", () => {
            tmzMatcher.test("-112").should.be.false;
        });
        it ("Should not match +4900", () => {
            tmzMatcher.test("+4900").should.be.false;
        });
        it ("Should not match -0974", () => {
            tmzMatcher.test("-0974").should.be.false;
        });
        it ("Should not match +31:20", () => {
            tmzMatcher.test("+31:20").should.be.false;
        });
        it ("Should not match -10:90", () => {
            tmzMatcher.test("-10:90").should.be.false;
        });
    });

    describe("TIME", () => {
        const timeMatcher = new RegExp(`^(?:${TIME})$`, "u");

        it("Should match 23", () => {
            timeMatcher.test("23").should.be.ok;
        });
        it("Should match 04:53", () => {
            timeMatcher.test("04:53").should.be.ok;
        });
        it("Should match 04:53+0300", () => {
            timeMatcher.test("04:53+0300").should.be.ok;
        });
        it("Should match 09:05:45", () => {
            timeMatcher.test("09:05:45").should.be.ok;
        });
        it("Should match 09:05:45-06:30", () => {
            timeMatcher.test("09:05:45-06:30").should.be.ok;
        });
        it("Should match 07:33:05.371", () => {
            timeMatcher.test("07:33:05.371").should.be.ok;
        });
        it("Should match 07:33:05.371Z", () => {
            timeMatcher.test("07:33:05.371Z").should.be.ok;
        });

        it("Should not match 9", () => {
            timeMatcher.test("9").should.be.false;
        });
        it("Should not match 04:", () => {
            timeMatcher.test("04:").should.be.false;
        });
        it("Should not match 04+0200", () => {
            timeMatcher.test("04+0200").should.be.false;
        });
        it("Should not match 03:5", () => {
            timeMatcher.test("03:5").should.be.false;
        });
        it("Should not match 03:71", () => {
            timeMatcher.test("03:71").should.be.false;
        });
        it("Should not match 09:05:7", () => {
            timeMatcher.test("09:05:7").should.be.false;
        });
        it("Should not match 07:33:05.4", () => {
            timeMatcher.test("07:33:05.4").should.be.false;
        });
        it("Should not match 05:13:35.45", () => {
            timeMatcher.test("05:13:35.45").should.be.false;
        });
        it("Should not match 07:33.371", () => {
            timeMatcher.test("07:33.371").should.be.false;
        });
        it("Should not match 07.371", () => {
            timeMatcher.test("07.371").should.be.false;
        });
    });

    describe("ISO8601_SHORT_DATE", () => {
        const dateMatcher = new RegExp(`^(?:${ISO8601_SHORT_DATE})$`, "u");

        it("Should match 2002-04-22", () => {
            dateMatcher.test("2002-04-22").should.be.ok;
        });
        it("Should match 2002-04-22T23", () => {
            dateMatcher.test("2002-04-22T23").should.be.ok;
        });
        it("Should match 2010-10-01T04:53", () => {
            dateMatcher.test("2010-10-01T04:53").should.be.ok;
        });
        it("Should match 1891-09-30T09:05:45", () => {
            dateMatcher.test("1891-09-30T09:05:45").should.be.ok;
        });
        it("Should match 1987-07-21T07:33:05.371", () => {
            dateMatcher.test("1987-07-21T07:33:05.371").should.be.ok;
        });
        it("Should match 1987-07-21T07:33Z", () => {
            dateMatcher.test("1987-07-21T07:33Z").should.be.ok;
        });
        it("Should match 1891-09-30T09:05:45-0344", () => {
            dateMatcher.test("1891-09-30T09:05:45-0344").should.be.ok;
        });
        it("Should match 2010-10-01T04:53+06:30", () => {
            dateMatcher.test("2010-10-01T04:53+06:30").should.be.ok;
        });

        it("Should not match 2017", () => {
            dateMatcher.test("2017").should.be.false;
        });
        it("Should not match 1998-12", () => {
            dateMatcher.test("1998-12").should.be.false;
        });
        it("Should not match 2017-", () => {
            dateMatcher.test("2017-").should.be.false;
        });
        it("Should not match 1998-1", () => {
            dateMatcher.test("1998-1").should.be.false;
        });
        it("Should not match 2007-02-30", () => {
            dateMatcher.test("2007-02-30").should.be.false;
        });
        it("Should not match 2002-04-99", () => {
            dateMatcher.test("2002-04-99").should.be.false;
        });
        it("Should not match 2002-04-99+0400", () => {
            dateMatcher.test("2002-04-99+0400").should.be.false;
        });
        it("Should not match 2011-04-22T", () => {
            dateMatcher.test("2011-04-22T").should.be.false;
        });
        it("Should not match 2011-04-22T-07:00", () => {
            dateMatcher.test("2011-04-22T-07:00").should.be.false;
        });
        it("Should not match 1984-04-22T9", () => {
            dateMatcher.test("1984-04-22T9").should.be.false;
        });
        it("Should not match 2010-10-01T04:", () => {
            dateMatcher.test("2010-10-01T04:").should.be.false;
        });
        it("Should not match 2010-10-01T04+0800", () => {
            dateMatcher.test("2010-10-01T04+0800").should.be.false;
        });
        it("Should not match 1980-01-11T03:5", () => {
            dateMatcher.test("1980-01-11T03:5").should.be.false;
        });
        it("Should not match 1980-01-11T03:71", () => {
            dateMatcher.test("1980-01-11T03:71").should.be.false;
        });
        it("Should not match 1891-09-30T09:05:7", () => {
            dateMatcher.test("1891-09-30T09:05:7").should.be.false;
        });
        it("Should not match 1987-07-21T07:33:05.4", () => {
            dateMatcher.test("1987-07-21T07:33:05.4").should.be.false;
        });
        it("Should not match 1999-02-28T05:13:35.45", () => {
            dateMatcher.test("1999-02-28T05:13:35.45").should.be.false;
        });
    });

    describe("ISO8601_DATE_TIME", () => {
        const dateMatcher = new RegExp(`^(?:${ISO8601_DATE_TIME})$`, "u");
        it("Should match 2017", () => {
            dateMatcher.test("2017").should.be.ok;
        });
        it("Should match 1998-12", () => {
            dateMatcher.test("1998-12").should.be.ok;
        });
        it("Should match 2002-04-22", () => {
            dateMatcher.test("2002-04-22").should.be.ok;
        });
        it("Should match 2002-04-22T23", () => {
            dateMatcher.test("2002-04-22T23").should.be.ok;
        });
        it("Should match 2010-10-01T04:53", () => {
            dateMatcher.test("2010-10-01T04:53").should.be.ok;
        });
        it("Should match 1891-09-30T09:05:45", () => {
            dateMatcher.test("1891-09-30T09:05:45").should.be.ok;
        });
        it("Should match 1987-07-21T07:33:05.371", () => {
            dateMatcher.test("1987-07-21T07:33:05.371").should.be.ok;
        });
        it("Should match 1987-07-21T07:33Z", () => {
            dateMatcher.test("1987-07-21T07:33Z").should.be.ok;
        });
        it("Should match 1891-09-30T09:05:45-0344", () => {
            dateMatcher.test("1891-09-30T09:05:45-0344").should.be.ok;
        });
        it("Should match 2010-10-01T04:53+06:30", () => {
            dateMatcher.test("2010-10-01T04:53+06:30").should.be.ok;
        });

        it("Should not match 2017-", () => {
            dateMatcher.test("2017-").should.be.false;
        });
        it("Should not match 1998-1", () => {
            dateMatcher.test("1998-1").should.be.false;
        });
        it("Should not match 2007-02-30", () => {
            dateMatcher.test("2007-02-30").should.be.false;
        });
        it("Should not match 2002-04-99", () => {
            dateMatcher.test("2002-04-99").should.be.false;
        });
        it("Should not match 2002-04-99+0400", () => {
            dateMatcher.test("2002-04-99+0400").should.be.false;
        });
        it("Should not match 2011-04-22T", () => {
            dateMatcher.test("2011-04-22T").should.be.false;
        });
        it("Should not match 2011-04-22T-07:00", () => {
            dateMatcher.test("2011-04-22T-07:00").should.be.false;
        });
        it("Should not match 1984-04-22T9", () => {
            dateMatcher.test("1984-04-22T9").should.be.false;
        });
        it("Should not match 2010-10-01T04:", () => {
            dateMatcher.test("2010-10-01T04:").should.be.false;
        });
        it("Should not match 2010-10-01T04+0800", () => {
            dateMatcher.test("2010-10-01T04+0800").should.be.false;
        });
        it("Should not match 1980-01-11T03:5", () => {
            dateMatcher.test("1980-01-11T03:5").should.be.false;
        });
        it("Should not match 1980-01-11T03:71", () => {
            dateMatcher.test("1980-01-11T03:71").should.be.false;
        });
        it("Should not match 1891-09-30T09:05:7", () => {
            dateMatcher.test("1891-09-30T09:05:7").should.be.false;
        });
        it("Should not match 1987-07-21T07:33:05.4", () => {
            dateMatcher.test("1987-07-21T07:33:05.4").should.be.false;
        });
        it("Should not match 1999-02-28T05:13:35.45", () => {
            dateMatcher.test("1999-02-28T05:13:35.45").should.be.false;
        });
    });
});
