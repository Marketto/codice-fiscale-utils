// tslint:disable: no-bitwise

import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("OMOCODE_BITMAP", () => {
		const omocodeBitmap = codiceFiscaleUtils.parser.OMOCODE_BITMAP;
		it("Off for Surname part", () => {
			// Surname
			expect(omocodeBitmap & 1).not.to.be.ok;
			expect(omocodeBitmap & 2).not.to.be.ok;
			expect(omocodeBitmap & 4).not.to.be.ok;
		});
		it("Off for Name part", () => {
			// Name
			expect(omocodeBitmap & 8).not.to.be.ok;
			expect(omocodeBitmap & 16).not.to.be.ok;
			expect(omocodeBitmap & 32).not.to.be.ok;
		});
		it("On for Birth Year part", () => {
			// Birth year
			expect(omocodeBitmap & 64).to.be.ok;
			expect(omocodeBitmap & 128).to.be.ok;
		});
		it("Off for Birth Month part", () => {
			// Birth month
			expect(omocodeBitmap & 256).not.to.be.ok;
		});
		it("On for Birth Day part", () => {
			// Birth day
			expect(omocodeBitmap & 512).to.be.ok;
			expect(omocodeBitmap & 1024).to.be.ok;
		});
		it("Off for first char and on for the rest 3 char codes of the Birth place part", () => {
			// Birth place code
			expect(omocodeBitmap & 2048).not.to.be.ok;
			expect(omocodeBitmap & 4096).to.be.ok;
			expect(omocodeBitmap & 8192).to.be.ok;
			expect(omocodeBitmap & 16384).to.be.ok;
		});
		it("Off for Check Char part", () => {
			// CRC
			expect(omocodeBitmap & 32768).not.to.be.ok;
		});
	});
};
