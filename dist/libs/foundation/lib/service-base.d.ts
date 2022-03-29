import { OnDestroy } from '@angular/core';
import { ApiResponse } from '@buildmotion/core';
import { ILoggingService } from '@buildmotion/logging';
import { Observable, Subscription } from 'rxjs';
import { ErrorResponse } from './models/error-response.model';
import { ServiceContext } from './models/ServiceContext';
/**
 * Use the [ServiceBase] to provide common behavior for Angular
 * services.
 */
export declare class ServiceBase implements OnDestroy {
    serviceName: string;
    loggingService: ILoggingService;
    serviceContext: ServiceContext;
    accessToken: string;
    id: string;
    private subscriptions;
    /**
     * Use the constructor to provide required elements to the base class.
     *
     * @param loggingService The [LoggingService] is a required dependency of this
     * class. It should be injected into any Angular Services that extend from
     * this base class. It will allow the members of the base class to log information
     * using the common LoggingService.
     */
    constructor(serviceName: string, loggingService: ILoggingService, serviceContext: ServiceContext);
    /**
     * Use to extract the contents of the HTTP body and return a JSON
     * representation of the data.
     * @param response: contains the HTTP response.
     */
    extractData(response: Response): Promise<any>;
    /**
     * Use to handle an unexpected error in the application. The error should implement
     * the specified interface. The method will add a new [ServiceMessage] to the
     * specified [ServiceContext].
     * @param error An unexpected application error that implements the [Error] interface.
     *
     * interface Error {
     *  name: string;
     *  message: string;
     *  stack?: string;
     * }
     */
    handleUnexpectedError(error: Error): void;
    /**
     * Use to handle an error that contains a [name] and a [message].
     * @param error
     */
    handleError(error: {
        name: string;
        message: string | undefined;
    }): void;
    /**
     * Use to create a new [ErrorResponse] with the specified message.
     * @param message The message for the specified [ErrorResponse].
     */
    createErrorResponse(message: string): ErrorResponse;
    /**
     * Use to create a API Response.
     *
     * @param message a simple message related to the operation (not for user notifications).
     * @param data the data payload (if any) for the response.
     * @returns Observable<ApiResponse<T>>
     */
    createAPIResponse<T>(message: string, data?: any, isSuccess?: boolean): Observable<ApiResponse<T>>;
    /**
     * Use a generic method to finish service requests that return [Observables].
     * @param sourceName
     */
    finishRequest(sourceName: string): void;
    logError(error: any, errorMessage: string): void;
    ngOnDestroy(): void;
    /**
     * Use to reset the service context when you want to clear messages from the [ServiceContext]. If you want to
     * append messages from subsequent service calls, do not use this method.
     */
    resetServiceContext(): void;
    /**
     * Register a Subscription
     * @param subscription
     */
    subscribe(subscription: Subscription): void;
    /**
     * Unsubscribe all Subjections
     */
    unsubscribeAllSubscriptions(): void;
    /**
     * Use to write the current messages contained in the [ServiceContext]. Written messages are limited
     * to items that are marked as [DisplayToUser = true].
     */
    writeMessages(): void;
}
