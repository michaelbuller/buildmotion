import { ApiResponse } from '@buildmotion/core';
import { BusinessActionBase } from './business-action-base';
export declare class ValidateApiResponseAction<T> extends BusinessActionBase<T> {
    private apiResponse;
    constructor(apiResponse: ApiResponse<T>);
    preValidateAction(): void;
    performAction(): void;
}
