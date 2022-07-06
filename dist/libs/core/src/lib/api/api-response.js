"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor() {
        /** A boolean indicator of success for the response. */
        this.isSuccess = false;
        /**
         * A message from the application API. Should not be used for general user notifications.
         */
        this.message = '';
        /**
         * A list of [ApiMessage] items.
         */
        this.messages = new Array();
        /**
         * Use to provide the timestamp the response was processed by the API.
         */
        this.timestamp = new Date();
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.js.map