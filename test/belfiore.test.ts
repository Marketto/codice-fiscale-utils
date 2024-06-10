import { Belfiore, BelfioreConnector } from "../src/";
import { expect } from "./utils";

describe("Belfiore", () => {
	describe("BelfioreConnector", () => {
		describe("binaryfindIndex", () => {
			it("Should return proper index", () => {
				BelfioreConnector.binaryfindIndex(
					"00100200300400500600700800900a00b00c00d00e00f00g00h00i",
					"00e"
				).should.be.equal(13);
			});
		});
	});

	describe("Belfiore", () => {
		describe("Belfiore[belfioreCode]", () => {
			it("Should return Rome for H501", () => {
				Belfiore.H501.name.should.be.equalIgnoreCase("ROMA");
			});
			it("Should return Bari for a662", () => {
				Belfiore.a662.name.should.be.equalIgnoreCase("BARI");
			});
		});
		describe("Belfiore place", () => {
			it("Should return code H501 for H501", () => {
				Belfiore.H501.belfioreCode.should.be.equal("H501");
				Belfiore.H501.creationDate.getFullYear().should.be.equal(1884);
				Belfiore.H501.expirationDate.getFullYear().should.be.equal(9999);
				Belfiore.H501.province.should.be.equal("RM");
				Belfiore.H501.dataSource.should.be.an("object");
			});
		});
		describe("Belfiore.toArray()", () => {
			const belfioreList = Belfiore.toArray();
			it("Should return an Array of places", () => {
				expect(belfioreList).to.be.an("array");
			});
			it("Should have different elements", () => {
				belfioreList[10].belfioreCode.should.be.not.equal(
					belfioreList[11].belfioreCode
				);
				belfioreList[10].name.should.be.not.equal(belfioreList[11].name);
				belfioreList[32].belfioreCode.should.be.not.equal(
					belfioreList[632].belfioreCode
				);
				belfioreList[32].name.should.be.not.equal(belfioreList[632].name);
			});
		});
		describe("Belfiore.findByName()", () => {
			it("Should return Rome", () => {
				const place = Belfiore.findByName("Roma");
				expect(place).to.be.ok;
				if (place) {
					place.name.should.be.equalIgnoreCase("ROMA");
				}
			});
			it("Should return the first entry of a dataset (Cecoslovacchia)", () => {
				const place = Belfiore.findByName("Cecoslovacchia");
				expect(place).to.be.ok;
				if (place) {
					place.name.should.be.equalIgnoreCase("Cecoslovacchia");
				}
			});

			it("Should return the last entry of a dataset (Sud Sudan)", () => {
				const place = Belfiore.findByName("Sud Sudan");
				expect(place).to.be.ok;
				if (place) {
					place.name.should.be.equalIgnoreCase("SUD SUDAN");
				}
			});
		});
	});

	describe("Belfiore.cities", () => {
		describe("Belfiore[belfioreCode]", () => {
			it("Should return Bari for A662", () => {
				Belfiore.cities.A662.name.should.be.equalIgnoreCase("BARI");
			});
		});
		describe("Belfiore.cities", () => {
			it("Should return cities by RM province", () => {
				const place = Belfiore.cities.byProvince("RM");
				expect(place).to.be.ok;
				if (place) {
					place.toArray().some((p) => p.province !== "RM").should.be.false;
				}
			});

			it("Should throw an error for province not matching 2 letters code", () => {
				try {
					Belfiore.cities.byProvince("@3");
				} catch (err: any) {
					err?.should?.be?.an("Error");
				}
			});
		});
	});

	describe("Belfiore.countries", () => {
		describe("Belfiore[belfioreCode]", () => {
			it("Should return Federazione russa for Z154", () => {
				Belfiore.countries.Z154.name.should.be.equalIgnoreCase(
					"Federazione russa"
				);
			});
		});
	});

	describe("Belfiore.provinces", () => {
		it("Should returns a list Italian province codes", () => {
			Belfiore.provinces.should.include.members([
				"CO",
				"TO",
				"FU",
				"VA",
				"PT",
				"BZ",
				"MC",
				"BS",
				"LE",
				"MI",
				"NO",
				"VC",
				"TN",
				"GO",
				"CS",
				"CE",
				"CN",
				"BG",
				"TS",
				"PL",
				"AL",
				"GE",
				"MS",
				"PV",
				"AQ",
				"CA",
				"PN",
				"IM",
				"PU",
				"VR",
				"VT",
				"BO",
				"PI",
				"AO",
				"VI",
				"FI",
				"SV",
				"NA",
				"CR",
				"ME",
				"AV",
				"RO",
				"FE",
				"MN",
				"PR",
				"VE",
				"RE",
				"BN",
				"LO",
				"PC",
				"BI",
				"UD",
				"SO",
				"PS",
				"BA",
				"RC",
				"SA",
				"PD",
				"AN",
				"AR",
				"PE",
				"BL",
				"CB",
				"RM",
				"PZ",
				"VB",
				"TR",
				"AT",
				"TV",
				"LU",
				"CH",
				"FO",
				"CT",
				"LC",
				"NU",
				"ZA",
				"RI",
				"SI",
				"RN",
				"PG",
				"AP",
				"CZ",
				"SS",
				"RG",
				"LI",
				"OR",
				"FG",
				"MT",
				"FR",
				"VV",
				"CL",
				"IS",
				"EN",
				"MB",
				"AG",
				"TE",
				"TP",
				"RA",
				"PA",
				"FM",
				"SP",
				"BT",
				"LT",
				"SU",
				"GR",
				"SR",
				"TA",
				"FC",
				"MO",
				"KR",
				"BR",
				"PO",
			]);
		});
	});

	describe("Belfiore Proxy pitfalls", () => {
		describe("Should return undefined", () => {
			it("countries.cities", () => {
				expect(Belfiore.countries.cities).to.be.undefined;
			});
			it("cities.countries", () => {
				expect(Belfiore.cities.countries).to.be.undefined;
			});
			it("byProvince().countries", () => {
				const provinces = Belfiore.byProvince("VV");
				expect(Belfiore.byProvince("VV")).to.be.ok;
				if (provinces) {
					expect(provinces.countries).to.be.undefined;
				}
			});
		});
	});

	describe("Belfiore.active", () => {
		describe("Belfiore.active()[belfioreCode]", () => {
			it("Should return Bologna for A944", () => {
				Belfiore.active().A944.name.should.be.equalIgnoreCase("BOLOGNA");
			});
			it("Should return null for D620 today", () => {
				expect(Belfiore.active().D620).to.be.not.ok;
			});
			it("Should return FIUME for D620 in 1933", () => {
				Belfiore.active([1933]).D620.name.should.be.equalIgnoreCase("FIUME");
			});
			it("Should throws Error for D620 in 2000", () => {
				expect(Belfiore.active([2000]).D620).to.be.not.ok;
			});
		});
		describe("Belfiore.cities.active()", () => {
			it("Should not contains D620 (Fiume)", () => {
				const activeCities = Belfiore.cities.active();
				expect(activeCities.D620).to.be.not.ok;
			});
			it("Should contains D620 (Fiume) passing 1933 as active date", () => {
				const activeCities = Belfiore.cities.active([1933]);
				activeCities.D620.name.should.be.equalIgnoreCase("FIUME");
			});
		});
	});

	describe("Belfiore.from", () => {
		describe("Belfiore.from()[belfioreCode]", () => {
			it("Should return FIUME for D620 from 1933", () => {
				Belfiore.from([1933]).D620.name.should.be.equalIgnoreCase("FIUME");
			});
			it("Should find Federazione Russa from 1933", () => {
				Belfiore.from([1933]).Z154.name.should.be.equalIgnoreCase(
					"Federazione Russa"
				);
			});
		});
	});
});
