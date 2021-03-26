import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("name", () => {
        describe("Generic Pattern", () => {
            const namePattern = Pattern.firstName();
            it ("Should validate name Kristersen", () => {
                namePattern.test("Kristersen").should.be.ok;
            });
            it ("Should validate name Rossi", () => {
                namePattern.test("Rossi").should.be.ok;
            });
            it ("Should validate name Ao", () => {
                namePattern.test("Ao").should.be.ok;
            });
            it ("Should validate name Tést", () => {
                namePattern.test("Tést").should.be.ok;
            });
            it ("Should validate composed name", () => {
                namePattern.test("Val Audator").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate name Marco for XYZMRC", () => {
                Pattern.firstName("XYZMRC").test("Marco").should.be.ok;
            });
            it ("Should validate name Alex for XYZLXA", () => {
                Pattern.firstName("XYZLXA").test("Alex").should.be.ok;
            });
            it ("Should validate name Aieie for XYZAIE", () => {
                Pattern.firstName("XYZAIE").test("Aieie").should.be.ok;
            });
            it ("Should validate name Ai for XYZAIX", () => {
                Pattern.firstName("XYZAIX").test("Ai").should.be.ok;
            });
            it ("Should validate name U for XYZUXX", () => {
                Pattern.firstName("XYZUXX").test("U").should.be.ok;
            });
            it ("Should validate name Vàlidàtòr for XYZVLD", () => {
                Pattern.firstName("XYZVDT").test("Vàlidàtòr").should.be.ok;
            });
            it ("Should validate composed name for CF", () => {
                Pattern.firstName("XYZVDT").test("Val Audator").should.be.ok;
            });
            it ("Should not validate name Air for XYZAIX", () => {
                Pattern.firstName("XYZAIX").test("Air").should.be.false;
            });
        });
    });
};
