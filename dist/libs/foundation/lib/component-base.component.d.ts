import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '@buildmotion/logging';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { AlertNotification } from './models/alert-notification.model';
import { ErrorResponse } from './models/error-response.model';
import { ServiceContext } from './models/ServiceContext';
declare global {
    interface Window {
        _paq: any;
    }
}
export declare class ComponentBase implements OnDestroy {
    loggingService: LoggingService;
    router: Router;
    componentName: string;
    alertNotification: AlertNotification;
    navSubscription: Subscription;
    currentUrl: string;
    previousUrl: string;
    id: Guid;
    subscriptions: Array<Subscription>;
    constructor(componentName: string, loggingService: LoggingService, router: Router);
    /**
     * Add a subscription to the component
     * @param subscription
     */
    subscribe(subscription: Subscription): void;
    /**
     * Unsubscribe to any registered subscriptions
     */
    ngOnDestroy(): void;
    /**
     * Use to set the URLs for when navigation ends. Provides the values
     * for the current and previous URL paths.
     * @param event Is a [NavigationEnd] type.
     */
    private updateUrls;
    /**
     * Use to send an analytic event to [Google Analytics].
     * @param category A category is a name that you supply as a way to group objects that you want to track. Typically,
     * you will use the same category name multiple times over related UI elements that you want to group under a given category.
     * @param action Use the action parameter to name the type of event or interaction you want to track for a particular
     * web object (i.e., play, stop, pause, download). A unique event is determined by a unique action name. You can use
     * duplicate action names across categories, but this can affect how unique events are calculated. See the suggestions
     * below and the Implicit Count section for more details.
     * @param label Provide additional information for events that you want to track, such as the movie title in the
     * video examples above, or the name of a file when tracking downloads. All labels are listed independently from
     * their parent categories and actions. This provides you with another useful way to segment the event data for
     * your reports. All labels are listed independently from their parent categories and actions. This provides you
     * with another useful way to segment the event data for your reports.
     * @param value Any numeric value indicating a [value] that will be summarized for the analytic item(s).
     *
     * More information at: https://support.google.com/analytics/answer/1033068
     * or https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    googleAnalyticsSendEvent(category: string, action: string, label: string, value: number): void;
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    createErrorResponse(message: string): ErrorResponse;
    /**
     * Use to handle service errors. These are error response [See: ErrorResponse] from
     * the application business layers (Action(s) or Http) that will bubble up to the
     * caller (i.e., a component) in a specified format:
     *
     * IsSuccess = false; // default for ErrorResponse
     * Message: string;
     * Errors: Array<ServiceError> = new Array<ServiceError>();
     * Exception: any;
     */
    handleServiceErrors(errorResponse: ErrorResponse, serviceContext?: ServiceContext): void;
    /**
     * Use to mark the form as touched; includes all form controls;
     */
    protected markFormAsTouched(form: FormGroup): void;
    /**
     * Use to log an unexpected error.
     */
    protected logError(error: any, message: string): void;
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    retrieveServiceContextErrorMessages(serviceContext: ServiceContext): Array<string>;
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    retrieveResponseErrorMessages(errorResponse: ErrorResponse): string[];
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    resetAlertNotifications(): void;
    /**
     * Use to navigate to the specified route.
     * @parm routeName The name of the target route.
     */
    routeTo(routeName: string): void;
    /**
     * Use to retrieve and show any response error messages.
     */
    showResponseErrors(response: ErrorResponse): void;
    finishRequest(message: string): void;
    protected showAlertMessage(message: string): void;
}
