"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMessage = void 0;
const api_message_type_enum_1 = require("./api-message-type.enum");
/**
 * Use this class to define messages for the application. The source of the message
 * may be the server API or even the application domain. The default
 * [message type] is [Information] if not specified (e.g., Warning, Error).
 */
class ApiMessage {
    constructor(code, message, messageType = api_message_type_enum_1.ApiMessageType.Information) {
        code ? (this.code = code) : (this.code = '');
        messageType ? (this.messageType = messageType) : (this.messageType = api_message_type_enum_1.ApiMessageType.Information); //default;
    }
}
exports.ApiMessage = ApiMessage;
//# sourceMappingURL=api-message.js.map