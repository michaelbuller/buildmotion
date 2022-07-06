import { HttpRequestMethod } from './http-request-methods.enum';
/**
 * Use to configure the HTTP options for a request.
 */
export class HttpRequestOptions {
    constructor() {
        this.requestMethod = HttpRequestMethod.get;
        this.requestUrl = '';
    }
    toString() {
        return `Method: ${this.requestMethod}`;
    }
}
//# sourceMappingURL=http-request-options.js.map