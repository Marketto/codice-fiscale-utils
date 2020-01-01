import * as ErrorMessages from "../const/error-messages.const";

class CfuError extends Error {
    constructor(errorMessage: string)
    constructor(errorCode: string) {
        super((Object.entries(ErrorMessages).find(([errId]) => errId === errorCode) || [])[1] || errorCode);
    }
}

export default CfuError;
