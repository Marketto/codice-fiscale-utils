import mismatch from "./validator/mismatch.test";
import validity from "./validator/validity.test";

describe("CodiceFiscaleUtils:Validator", () => {
    validity();
    describe("CF Match / Mismatch", () => {

        mismatch();
    });
});
