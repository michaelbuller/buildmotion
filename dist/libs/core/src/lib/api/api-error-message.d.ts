import { ApiMessage } from './api-message';
export declare class ApiErrorMessage extends ApiMessage {
    /**
     * Use to create a new [ApiErrorMessage].
     *
     * @param message The error from the API.
     * @param code An optional identifier for the error.
     */
    constructor(message: string, code: string | null);
}
