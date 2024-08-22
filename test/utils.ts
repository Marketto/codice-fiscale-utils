import chai from "chai";
import chaiString from "chai-string";
chai.use(chaiString);
chai.should();
const { expect } = chai;

import { CodiceFiscaleUtils } from "../src/";
import { belfioreConnector } from "@marketto/belfiore-connector-embedded";
const codiceFiscaleUtils = new CodiceFiscaleUtils(belfioreConnector);

export { codiceFiscaleUtils, expect, chai };
