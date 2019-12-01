const ERRORS = Object.freeze({
    INVALID_SURNAME: 'Provided surname is not valid, only letters, diacritics and apostrophe allowed',
    INVALID_NAME: 'Provided name is not valid, only letters, diacritics and apostrophe allowed',
    INVALID_DAY: 'Provided day is not valid',
    INVALID_GENDER: 'Provided gender is not valid',
    INVALID_DAY_OR_GENDER: 'Provided day and/or gender are not valid',
    INVALID_YEAR: 'Provided year is not valid, only 2 or 4 digit numbers are allowed',
    INVALID_DATE: 'Provided date is not valid',
});

class Errors {
    /**
     * 
     * @param {string} className 
     * @param {string} methodName 
     */
    constructor(className, methodName) {
        Object.assign(
            this,
            Object.entries(ERRORS)
                .map(([key, name]) => [key, new Error(`[${className}.${methodName}] ${name}`)])
                .reduce((accumulator, [key, err]) => Object.assign(accumulator, { [key]: err }), {})
        );
    }
}

export default Errors;