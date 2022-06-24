import { ApiMessageType } from './api-message-type.enum';
/**
 * Use this class to define messages for the application. The source of the message
 * may be the server API or even the application domain. The default
 * [message type] is [Information] if not specified (e.g., Warning, Error).
 */
export class ApiMessage {
    constructor(code, message, messageType = ApiMessageType.Information) {
        code ? (this.code = code) : (this.code = '');
        messageType ? (this.messageType = messageType) : (this.messageType = ApiMessageType.Information); //default;
    }
}
//# sourceMappingURL=api-message.js.map