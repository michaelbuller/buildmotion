import { ServiceResponse } from './service-response.model';
export declare class ErrorResponse extends ServiceResponse {
    Exception: Error;
    constructor();
}
