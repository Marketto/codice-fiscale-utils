import type {
	BelfiorePlace,
	IBelfioreConnector,
} from "@marketto/belfiore-connector";
import { belfioreConnector } from "@marketto/belfiore-connector-embedded";
import { CodiceFiscaleUtils } from "../src/";
import { expect } from "./utils";

interface IConnectorCalls {
	findByCode: number;
}

const countingConnector = (
	connector: IBelfioreConnector,
	calls: IConnectorCalls
): IBelfioreConnector => ({
	get provinces() {
		return connector.provinces;
	},
	get cities() {
		const cities = connector.cities;
		return cities && countingConnector(cities, calls);
	},
	get countries() {
		const countries = connector.countries;
		return countries && countingConnector(countries, calls);
	},
	toArray: (): Promise<BelfiorePlace[]> => connector.toArray(),
	searchByName: (name: string): Promise<BelfiorePlace[] | null> =>
		connector.searchByName(name),
	findByName: (name: string): Promise<BelfiorePlace | null> =>
		connector.findByName(name),
	findByCode: (code: string): Promise<BelfiorePlace | null> => {
		calls.findByCode++;
		return connector.findByCode(code);
	},
	active: (date): IBelfioreConnector =>
		countingConnector(connector.active(date), calls),
	from: (date): IBelfioreConnector =>
		countingConnector(connector.from(date), calls),
	byProvince: (code): IBelfioreConnector | undefined => {
		const provinceConnector = connector.byProvince(code);
		return provinceConnector && countingConnector(provinceConnector, calls);
	},
});

describe("Belfiore connector calls", () => {
	let calls: IConnectorCalls;
	let codiceFiscaleUtils: CodiceFiscaleUtils;

	beforeEach(() => {
		calls = { findByCode: 0 };
		codiceFiscaleUtils = new CodiceFiscaleUtils(
			countingConnector(belfioreConnector, calls)
		);
	});

	it("validates an existing birth place with one lookup", async () => {
		expect(await codiceFiscaleUtils.validator.isBirthPlaceValid("H501")).to.be
			.true;
		expect(calls.findByCode).to.equal(1);
	});

	it("checks a birth date mismatch without resolving the place twice", async () => {
		expect(
			await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
				"1988-03-11",
				"H501"
			)
		).to.be.false;
		expect(calls.findByCode).to.equal(2);
	});

	it("builds verbose errors with one lookup for the fiscal-code place", async () => {
		expect(
			await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
				.errors
		).to.be.null;
		expect(calls.findByCode).to.equal(1);
	});
});
