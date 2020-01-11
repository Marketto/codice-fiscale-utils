import mismatch from "./validator/mismatch.test";
import validity from "./validator/validity.test";

describe("Validator", () => {
    validity();
    describe("CF Match / Mismatch", () => {

        mismatch();
    });
});
