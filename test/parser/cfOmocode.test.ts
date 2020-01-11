import { CheckDigitizer, Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfOmocode", () => {
        describe("Plain", () => {
            const cf = "VRNGNY07d68c351v";
            it("#0", () => {
                Parser.cfOmocode(cf, 0).should.be.equalIgnoreCase(cf);
            });
            it("#1", () => {
                Parser.cfOmocode(cf, 1).should.be.equalIgnoreCase("VRNGNY07d68c35Mn");
            });
            it("#2", () => {
                Parser.cfOmocode(cf, 2).should.be.equalIgnoreCase("VRNGNY07d68c3R1h");
            });
            it("#3", () => {
                Parser.cfOmocode(cf, 3).should.be.equalIgnoreCase("VRNGNY07d68c3RMz");
            });
            it("#8", () => {
                Parser.cfOmocode(cf, 8).should.be.equalIgnoreCase("VRNGNY07d6Uc351s");
            });
            it("#32", () => {
                Parser.cfOmocode(cf, 32).should.be.equalIgnoreCase("VRNGNY0Td68c351h");
            });
            it("#127", () => {
                Parser.cfOmocode(cf, 127).should.be.equalIgnoreCase("VRNGNYLTdSUcPRMt");
            });
        });
        describe("Re-omocode", () => {
            const cf = "kkalmnvmaplb331z";
            it("#0 (decode)", () => {
                Parser.cfOmocode(cf, 0).should.be.equalIgnoreCase("kkalmn91a30b331p");
            });
            it("#1", () => {
                Parser.cfOmocode(cf, 1).should.be.equalIgnoreCase("kkalmn91a30b33Mh");
            });
            it("#74", () => {
                Parser.cfOmocode(cf, 74).should.be.equalIgnoreCase("kkalmnv1a3lb3P1t");
            });
            it("#127", () => {
                Parser.cfOmocode(cf, 127).should.be.equalIgnoreCase("kkalmnvmaplbPPMe");
            });
        });
    });
};
