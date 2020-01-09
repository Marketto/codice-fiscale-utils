import { Parser } from "../../src/";
export default () => {
    describe("cfOmocodeId", () => {
        it("VRNGNYLtdsucprmt", () => {
            Parser.cfOmocode("VRNGNY07d68c351v", 127).should.be.equal("VRNGNYLtdsucprmt");
        });
        it("kkalmn91as0b331z", () => {
            Parser.cfOmocode("kkalmn91a60b331s", 16).should.be.equal("kkalmn91as0b331e");
        });
        it("kkalmn91a30b331z", () => {
            Parser.cfOmocode("kkalmn91a30b331p", 0).should.be.equal("kkalmn91a30b331p");
        });
    });
};
