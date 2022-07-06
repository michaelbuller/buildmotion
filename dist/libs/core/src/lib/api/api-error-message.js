"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorMessage = void 0;
const api_message_1 = require("./api-message");
const api_message_type_enum_1 = require("./api-message-type.enum");
class ApiErrorMessage extends api_message_1.ApiMessage {
    /**
     * Use to create a new [ApiErrorMessage].
     *
     * @param message The error from the API.
     * @param code An optional identifier for the error.
     */
    constructor(message, code) {
        super();
        this.messageType = api_message_type_enum_1.ApiMessageType.Error;
        this.message = message;
        if (code) {
            this.code = code;
        }
    }
}
exports.ApiErrorMessage = ApiErrorMessage;
//# sourceMappingURL=api-error-message.js.map