import { Parser } from "../../src/";
export default () => {
    describe("cfOmocodeId", () => {
        it("VRNGNYLtdsucprmt", () => {
            Parser.cfOmocodeId("VRNGNYLtdsucprmt").should.be.equal(127);
        });
        it("kkalmn91as0b331z", () => {
            Parser.cfOmocodeId("kkalmn91as0b331z").should.be.equal(16);
        });
        it("kkalmn91a30b331z", () => {
            Parser.cfOmocodeId("kkalmn91a30b331z").should.be.equal(0);
        });
    });
};
