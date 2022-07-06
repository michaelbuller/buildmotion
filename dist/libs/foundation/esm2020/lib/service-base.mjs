import { __decorate, __metadata, __param } from "tslib";
import { Inject } from '@angular/core';
import { LoggingService, Severity } from '@buildmotion/logging';
import { Guid } from 'guid-typescript';
import { of } from 'rxjs';
import { ErrorResponse } from './models/error-response.model';
import { MessageType } from './models/MessageType';
import { ServiceContext } from './models/ServiceContext';
import { ServiceMessage } from './models/ServiceMessage';
/**
 * Use the [ServiceBase] to provide common behavior for Angular
 * services.
 */
let ServiceBase = class ServiceBase {
    /**
     * Use the constructor to provide required elements to the base class.
     *
     * @param loggingService The [LoggingService] is a required dependency of this
     * class. It should be injected into any Angular Services that extend from
     * this base class. It will allow the members of the base class to log information
     * using the common LoggingService.
     */
    constructor(serviceName, loggingService, serviceContext) {
        this.serviceName = serviceName;
        this.loggingService = loggingService;
        this.serviceContext = serviceContext;
        this.accessToken = '';
        this.id = Guid.create().toString();
        this.subscriptions = [];
        this.loggingService.log(this.serviceName, Severity.Information, `Initializing ${this.serviceName} at ${Date.now()} with id: ${this.id}`);
    }
    /**
     * Use to extract the contents of the HTTP body and return a JSON
     * representation of the data.
     * @param response: contains the HTTP response.
     */
    extractData(response) {
        const body = response.json();
        return body || {};
    }
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
    handleUnexpectedError(error) {
        const message = new ServiceMessage(error.name, error.message).WithDisplayToUser(false).WithMessageType(MessageType.Error).WithSource(this.serviceName);
        const tags = [`${this.serviceName}`];
        const logItem = `${message.toString()}; ${error.stack}`;
        this.loggingService.log(this.serviceName, Severity.Error, logItem, tags);
        this.serviceContext.addMessage(message);
    }
    /**
     * Use to handle an error that contains a [name] and a [message].
     * @param error
     */
    handleError(error) {
        const message = new ServiceMessage(error.name, error.message).WithDisplayToUser(false).WithMessageType(MessageType.Error).WithSource(this.serviceName);
        const tags = [`${this.serviceName}`];
        this.loggingService.log(this.serviceName, Severity.Error, message.toString(), tags);
        this.serviceContext.addMessage(message);
    }
    /**
     * Use to create a new [ErrorResponse] with the specified message.
     * @param message The message for the specified [ErrorResponse].
     */
    createErrorResponse(message) {
        const response = new ErrorResponse();
        response.Message = message;
        return response;
    }
    /**
     * Use to create a API Response.
     *
     * @param message a simple message related to the operation (not for user notifications).
     * @param data the data payload (if any) for the response.
     * @returns Observable<ApiResponse<T>>
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createAPIResponse(message, data, isSuccess = true) {
        const response = {
            id: Guid.create().toString(),
            isSuccess: isSuccess,
            data: data,
            message,
            messages: [],
            timestamp: new Date()
        };
        return of(response);
    }
    /**
     * Use a generic method to finish service requests that return [Observables].
     * @param sourceName
     */
    finishRequest(sourceName) {
        this.loggingService.log(this.serviceName, Severity.Information, `Request for [${sourceName}] by ${this.serviceName} is complete.`);
        if (this.serviceContext.hasErrors()) {
            this.loggingService.log(this.serviceName, Severity.Information, `Preparing to write any messages.`);
            this.serviceContext.Messages.filter((f) => f.MessageType === MessageType.Error && f.DisplayToUser).forEach((e) => this.loggingService.log(this.serviceName, Severity.Error, e.toString()));
        }
    }
    logError(error, errorMessage) {
        this.loggingService.log(this.serviceName, Severity.Error, `${errorMessage}; Error: ${error.message}`);
    }
    ngOnDestroy() {
        this.unsubscribeAllSubscriptions();
    }
    /**
     * Use to reset the service context when you want to clear messages from the [ServiceContext]. If you want to
     * append messages from subsequent service calls, do not use this method.
     */
    resetServiceContext() {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to reset the Messages of the current [ServiceContext].`);
        if (this.serviceContext && this.serviceContext.Messages) {
            if (this.serviceContext.Messages.length > 0) {
                this.loggingService.log(this.serviceName, Severity.Information, `Resetting the Messages of the current [ServiceContext].`);
                this.serviceContext.Messages = new Array();
            }
            else {
                this.loggingService.log(this.serviceName, Severity.Information, `The current [ServiceContext] does not contain any [Messages].`);
            }
        }
        else {
            this.loggingService.log(this.serviceName, Severity.Warning, `The current [ServiceContext] is not valid.`);
        }
        this.loggingService.log(this.serviceName, Severity.Information, `Finished  processing request to [reset] the Messages of the current [ServiceContext].`);
    }
    /**
     * Register a Subscription
     * @param subscription
     */
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    /**
     * Unsubscribe all Subjections
     */
    unsubscribeAllSubscriptions() {
        this.subscriptions.forEach((sub) => {
            if (sub && typeof sub.unsubscribe === 'function') {
                sub.unsubscribe();
            }
        });
    }
    /**
     * Use to write the current messages contained in the [ServiceContext]. Written messages are limited
     * to items that are marked as [DisplayToUser = true].
     */
    writeMessages() {
        if (this.serviceContext && this.serviceContext.Messages) {
            this.serviceContext.Messages.forEach((e) => {
                if (e.MessageType === MessageType.Error && e.DisplayToUser) {
                    this.loggingService.log(this.serviceName, Severity.Error, e.toString());
                }
            });
        }
    }
};
ServiceBase = __decorate([
    Inject({}),
    __param(1, Inject(LoggingService)),
    __metadata("design:paramtypes", [String, Object, ServiceContext])
], ServiceBase);
export { ServiceBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9mb3VuZGF0aW9uL3NyYy9saWIvc2VydmljZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBbUIsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQWMsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQ7OztHQUdHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUt0Qjs7Ozs7OztPQU9HO0lBQ0gsWUFDUyxXQUFtQixFQUNLLGNBQStCLEVBQ3ZELGNBQThCO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ0ssbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWZ2QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztRQWM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNJLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLFFBQWtCO1FBQzVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gscUJBQXFCLENBQUMsS0FBWTtRQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkosTUFBTSxJQUFJLEdBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBb0Q7UUFDOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZKLE1BQU0sSUFBSSxHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxPQUFlO1FBQ2pDLE1BQU0sUUFBUSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCw4REFBOEQ7SUFDOUQsaUJBQWlCLENBQUksT0FBZSxFQUFFLElBQVUsRUFBRSxTQUFTLEdBQUcsSUFBSTtRQUNoRSxNQUFNLFFBQVEsR0FBbUI7WUFDL0IsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPO1lBQ1AsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDdEIsQ0FBQTtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLGdCQUFnQixVQUFVLFFBQVEsSUFBSSxDQUFDLFdBQVcsZUFBZSxDQUFDLENBQUM7UUFDbkksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUMvRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3hFLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVSxFQUFFLFlBQW9CO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLFlBQVksWUFBWSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLGtFQUFrRSxDQUFDLENBQUM7UUFDcEksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3ZELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLHlEQUF5RCxDQUFDLENBQUM7Z0JBQzNILElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFrQixDQUFDO2FBQzVEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO2FBQ2xJO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1NBQzNHO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLHVGQUF1RixDQUFDLENBQUM7SUFDM0osQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxZQUEwQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBMkI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNoRCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO29CQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3pFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBO0FBdEtZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQWdCTixXQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtxREFDQSxjQUFjO0dBaEI1QixXQUFXLENBc0t2QjtTQXRLWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVJlc3BvbnNlIH0gZnJvbSAnQGJ1aWxkbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgSUxvZ2dpbmdTZXJ2aWNlLCBMb2dnaW5nU2VydmljZSwgU2V2ZXJpdHkgfSBmcm9tICdAYnVpbGRtb3Rpb24vbG9nZ2luZyc7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnZ3VpZC10eXBlc2NyaXB0JztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9lcnJvci1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4vbW9kZWxzL01lc3NhZ2VUeXBlJztcbmltcG9ydCB7IFNlcnZpY2VDb250ZXh0IH0gZnJvbSAnLi9tb2RlbHMvU2VydmljZUNvbnRleHQnO1xuaW1wb3J0IHsgU2VydmljZU1lc3NhZ2UgfSBmcm9tICcuL21vZGVscy9TZXJ2aWNlTWVzc2FnZSc7XG5cbi8qKlxuICogVXNlIHRoZSBbU2VydmljZUJhc2VdIHRvIHByb3ZpZGUgY29tbW9uIGJlaGF2aW9yIGZvciBBbmd1bGFyXG4gKiBzZXJ2aWNlcy5cbiAqL1xuQEluamVjdCh7fSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGFjY2Vzc1Rva2VuID0gJyc7XG4gIGlkOiBzdHJpbmcgPSBHdWlkLmNyZWF0ZSgpLnRvU3RyaW5nKCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIHByb3ZpZGUgcmVxdWlyZWQgZWxlbWVudHMgdG8gdGhlIGJhc2UgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBsb2dnaW5nU2VydmljZSBUaGUgW0xvZ2dpbmdTZXJ2aWNlXSBpcyBhIHJlcXVpcmVkIGRlcGVuZGVuY3kgb2YgdGhpc1xuICAgKiBjbGFzcy4gSXQgc2hvdWxkIGJlIGluamVjdGVkIGludG8gYW55IEFuZ3VsYXIgU2VydmljZXMgdGhhdCBleHRlbmQgZnJvbVxuICAgKiB0aGlzIGJhc2UgY2xhc3MuIEl0IHdpbGwgYWxsb3cgdGhlIG1lbWJlcnMgb2YgdGhlIGJhc2UgY2xhc3MgdG8gbG9nIGluZm9ybWF0aW9uXG4gICAqIHVzaW5nIHRoZSBjb21tb24gTG9nZ2luZ1NlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyxcbiAgICBASW5qZWN0KExvZ2dpbmdTZXJ2aWNlKSBwdWJsaWMgbG9nZ2luZ1NlcnZpY2U6IElMb2dnaW5nU2VydmljZSxcbiAgICBwdWJsaWMgc2VydmljZUNvbnRleHQ6IFNlcnZpY2VDb250ZXh0KSB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBJbml0aWFsaXppbmcgJHt0aGlzLnNlcnZpY2VOYW1lfSBhdCAke0RhdGUubm93KCl9IHdpdGggaWQ6ICR7dGhpcy5pZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gZXh0cmFjdCB0aGUgY29udGVudHMgb2YgdGhlIEhUVFAgYm9keSBhbmQgcmV0dXJuIGEgSlNPTlxuICAgKiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZGF0YS5cbiAgICogQHBhcmFtIHJlc3BvbnNlOiBjb250YWlucyB0aGUgSFRUUCByZXNwb25zZS5cbiAgICovXG4gIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGNvbnN0IGJvZHkgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGJvZHkgfHwge307XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGhhbmRsZSBhbiB1bmV4cGVjdGVkIGVycm9yIGluIHRoZSBhcHBsaWNhdGlvbi4gVGhlIGVycm9yIHNob3VsZCBpbXBsZW1lbnRcbiAgICogdGhlIHNwZWNpZmllZCBpbnRlcmZhY2UuIFRoZSBtZXRob2Qgd2lsbCBhZGQgYSBuZXcgW1NlcnZpY2VNZXNzYWdlXSB0byB0aGVcbiAgICogc3BlY2lmaWVkIFtTZXJ2aWNlQ29udGV4dF0uXG4gICAqIEBwYXJhbSBlcnJvciBBbiB1bmV4cGVjdGVkIGFwcGxpY2F0aW9uIGVycm9yIHRoYXQgaW1wbGVtZW50cyB0aGUgW0Vycm9yXSBpbnRlcmZhY2UuXG4gICAqXG4gICAqIGludGVyZmFjZSBFcnJvciB7XG4gICAqICBuYW1lOiBzdHJpbmc7XG4gICAqICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICBzdGFjaz86IHN0cmluZztcbiAgICogfVxuICAgKi9cbiAgaGFuZGxlVW5leHBlY3RlZEVycm9yKGVycm9yOiBFcnJvcik6IHZvaWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgU2VydmljZU1lc3NhZ2UoZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSkuV2l0aERpc3BsYXlUb1VzZXIoZmFsc2UpLldpdGhNZXNzYWdlVHlwZShNZXNzYWdlVHlwZS5FcnJvcikuV2l0aFNvdXJjZSh0aGlzLnNlcnZpY2VOYW1lKTtcblxuICAgIGNvbnN0IHRhZ3M6IHN0cmluZ1tdID0gW2Ake3RoaXMuc2VydmljZU5hbWV9YF07XG4gICAgY29uc3QgbG9nSXRlbSA9IGAke21lc3NhZ2UudG9TdHJpbmcoKX07ICR7ZXJyb3Iuc3RhY2t9YDtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5FcnJvciwgbG9nSXRlbSwgdGFncyk7XG5cbiAgICB0aGlzLnNlcnZpY2VDb250ZXh0LmFkZE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGhhbmRsZSBhbiBlcnJvciB0aGF0IGNvbnRhaW5zIGEgW25hbWVdIGFuZCBhIFttZXNzYWdlXS5cbiAgICogQHBhcmFtIGVycm9yXG4gICAqL1xuICBoYW5kbGVFcnJvcihlcnJvcjogeyBuYW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCB9KTogdm9pZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBTZXJ2aWNlTWVzc2FnZShlcnJvci5uYW1lLCBlcnJvci5tZXNzYWdlKS5XaXRoRGlzcGxheVRvVXNlcihmYWxzZSkuV2l0aE1lc3NhZ2VUeXBlKE1lc3NhZ2VUeXBlLkVycm9yKS5XaXRoU291cmNlKHRoaXMuc2VydmljZU5hbWUpO1xuICAgIGNvbnN0IHRhZ3M6IHN0cmluZ1tdID0gW2Ake3RoaXMuc2VydmljZU5hbWV9YF07XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuRXJyb3IsIG1lc3NhZ2UudG9TdHJpbmcoKSwgdGFncyk7XG4gICAgdGhpcy5zZXJ2aWNlQ29udGV4dC5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBjcmVhdGUgYSBuZXcgW0Vycm9yUmVzcG9uc2VdIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIHNwZWNpZmllZCBbRXJyb3JSZXNwb25zZV0uXG4gICAqL1xuICBjcmVhdGVFcnJvclJlc3BvbnNlKG1lc3NhZ2U6IHN0cmluZyk6IEVycm9yUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBFcnJvclJlc3BvbnNlID0gbmV3IEVycm9yUmVzcG9uc2UoKTtcbiAgICByZXNwb25zZS5NZXNzYWdlID0gbWVzc2FnZTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGNyZWF0ZSBhIEFQSSBSZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2UgYSBzaW1wbGUgbWVzc2FnZSByZWxhdGVkIHRvIHRoZSBvcGVyYXRpb24gKG5vdCBmb3IgdXNlciBub3RpZmljYXRpb25zKS5cbiAgICogQHBhcmFtIGRhdGEgdGhlIGRhdGEgcGF5bG9hZCAoaWYgYW55KSBmb3IgdGhlIHJlc3BvbnNlLlxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlPFQ+PlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY3JlYXRlQVBJUmVzcG9uc2U8VD4obWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55LCBpc1N1Y2Nlc3MgPSB0cnVlKTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZTxUPj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBBcGlSZXNwb25zZTxUPiA9IHtcbiAgICAgIGlkOiBHdWlkLmNyZWF0ZSgpLnRvU3RyaW5nKCksXG4gICAgICBpc1N1Y2Nlc3M6IGlzU3VjY2VzcyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBtZXNzYWdlLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiBvZihyZXNwb25zZSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIGEgZ2VuZXJpYyBtZXRob2QgdG8gZmluaXNoIHNlcnZpY2UgcmVxdWVzdHMgdGhhdCByZXR1cm4gW09ic2VydmFibGVzXS5cbiAgICogQHBhcmFtIHNvdXJjZU5hbWVcbiAgICovXG4gIGZpbmlzaFJlcXVlc3Qoc291cmNlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBSZXF1ZXN0IGZvciBbJHtzb3VyY2VOYW1lfV0gYnkgJHt0aGlzLnNlcnZpY2VOYW1lfSBpcyBjb21wbGV0ZS5gKTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlQ29udGV4dC5oYXNFcnJvcnMoKSkge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gd3JpdGUgYW55IG1lc3NhZ2VzLmApO1xuICAgICAgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcy5maWx0ZXIoKGYpID0+IGYuTWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkVycm9yICYmIGYuRGlzcGxheVRvVXNlcikuZm9yRWFjaCgoZSkgPT5cbiAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuRXJyb3IsIGUudG9TdHJpbmcoKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbG9nRXJyb3IoZXJyb3I6IGFueSwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5FcnJvciwgYCR7ZXJyb3JNZXNzYWdlfTsgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxTdWJzY3JpcHRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gcmVzZXQgdGhlIHNlcnZpY2UgY29udGV4dCB3aGVuIHlvdSB3YW50IHRvIGNsZWFyIG1lc3NhZ2VzIGZyb20gdGhlIFtTZXJ2aWNlQ29udGV4dF0uIElmIHlvdSB3YW50IHRvXG4gICAqIGFwcGVuZCBtZXNzYWdlcyBmcm9tIHN1YnNlcXVlbnQgc2VydmljZSBjYWxscywgZG8gbm90IHVzZSB0aGlzIG1ldGhvZC5cbiAgICovXG4gIHJlc2V0U2VydmljZUNvbnRleHQoKSB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gcmVzZXQgdGhlIE1lc3NhZ2VzIG9mIHRoZSBjdXJyZW50IFtTZXJ2aWNlQ29udGV4dF0uYCk7XG4gICAgaWYgKHRoaXMuc2VydmljZUNvbnRleHQgJiYgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcykge1xuICAgICAgaWYgKHRoaXMuc2VydmljZUNvbnRleHQuTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFJlc2V0dGluZyB0aGUgTWVzc2FnZXMgb2YgdGhlIGN1cnJlbnQgW1NlcnZpY2VDb250ZXh0XS5gKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcyA9IG5ldyBBcnJheTxTZXJ2aWNlTWVzc2FnZT4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuc2VydmljZU5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgVGhlIGN1cnJlbnQgW1NlcnZpY2VDb250ZXh0XSBkb2VzIG5vdCBjb250YWluIGFueSBbTWVzc2FnZXNdLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5XYXJuaW5nLCBgVGhlIGN1cnJlbnQgW1NlcnZpY2VDb250ZXh0XSBpcyBub3QgdmFsaWQuYCk7XG4gICAgfVxuICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuc2VydmljZU5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgRmluaXNoZWQgIHByb2Nlc3NpbmcgcmVxdWVzdCB0byBbcmVzZXRdIHRoZSBNZXNzYWdlcyBvZiB0aGUgY3VycmVudCBbU2VydmljZUNvbnRleHRdLmApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgU3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSBzdWJzY3JpcHRpb25cbiAgICovXG4gIHN1YnNjcmliZShzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgYWxsIFN1YmplY3Rpb25zXG4gICAqL1xuICB1bnN1YnNjcmliZUFsbFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YikgPT4ge1xuICAgICAgaWYgKHN1YiAmJiB0eXBlb2Ygc3ViLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHdyaXRlIHRoZSBjdXJyZW50IG1lc3NhZ2VzIGNvbnRhaW5lZCBpbiB0aGUgW1NlcnZpY2VDb250ZXh0XS4gV3JpdHRlbiBtZXNzYWdlcyBhcmUgbGltaXRlZFxuICAgKiB0byBpdGVtcyB0aGF0IGFyZSBtYXJrZWQgYXMgW0Rpc3BsYXlUb1VzZXIgPSB0cnVlXS5cbiAgICovXG4gIHdyaXRlTWVzc2FnZXMoKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZUNvbnRleHQgJiYgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcykge1xuICAgICAgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLk1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5FcnJvciAmJiBlLkRpc3BsYXlUb1VzZXIpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5FcnJvciwgZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=