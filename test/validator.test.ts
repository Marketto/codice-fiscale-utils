import isValid from "./validator/isValid.test";

describe("CodiceFiscaleUtils:Validator", () => {
    describe("personal infos", () => Promise.all([
        isValid(),
    ]));
});
