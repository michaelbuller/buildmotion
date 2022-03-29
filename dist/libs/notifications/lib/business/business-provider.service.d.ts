import { ApiResponse } from '@buildmotion/core';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';
import * as i0 from "@angular/core";
export declare class BusinessProviderService extends ServiceBase {
    constructor(logger: LoggingService, serviceContext: ServiceContext);
    /**
     * Use to execute one or more actions to process the business operation.
     * @param message a message to display form information to a user.
     */
    validateNotification<T extends Notification>(message: Notification): Observable<ApiResponse<T>>;
    validateApiResponse<T extends Notification>(apiResponse: ApiResponse<T>): Observable<ApiResponse<T>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BusinessProviderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BusinessProviderService>;
}
