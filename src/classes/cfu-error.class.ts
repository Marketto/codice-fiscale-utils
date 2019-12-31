import * as ErrorMessages from "../const/error-messages.const";
class CfuError extends Error {
    constructor(errorMessage: string)
    constructor(errorCode: string) {
        super(ErrorMessages[errorCode] || errorCode);
    }
}

export default CfuError;
