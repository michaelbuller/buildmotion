import { __decorate, __metadata } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService, Severity } from '@buildmotion/logging';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { AlertNotification } from './models/alert-notification.model';
import { AlertTypes } from './models/alert-types.constants';
import { ErrorResponse } from './models/error-response.model';
import { MessageType } from './models/MessageType';
let ComponentBase = class ComponentBase {
    constructor(componentName, loggingService, router) {
        this.loggingService = loggingService;
        this.router = router;
        this.navSubscription = new Subscription();
        this.id = Guid.create();
        this.subscriptions = [];
        this.componentName = componentName;
        this.alertNotification = new AlertNotification('', '');
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to load [${this.componentName}] component.`, [`ComponentId:${this.id}`]);
    }
    /**
     * Add a subscription to the component
     * @param subscription
     */
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    /**
     * Unsubscribe to any registered subscriptions
     */
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            if (sub && typeof sub.unsubscribe === 'function') {
                sub.unsubscribe();
            }
        });
    }
    /**
     * Use to set the URLs for when navigation ends. Provides the values
     * for the current and previous URL paths.
     * @param event Is a [NavigationEnd] type.
     */
    updateUrls(event) {
        if (event.urlAfterRedirects) {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.urlAfterRedirects;
        }
    }
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
    googleAnalyticsSendEvent(category, action, label, value) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    createErrorResponse(message) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to create error response for component.`);
        const errorResponse = new ErrorResponse();
        errorResponse.Message = message;
        return errorResponse;
    }
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
    handleServiceErrors(errorResponse, serviceContext) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to handle service errors for component.`);
        if (serviceContext && serviceContext.hasErrors()) {
            this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the ServiceContext/ValidationContext;`);
            const messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        }
        else {
            if (errorResponse && errorResponse.Message) {
                this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the [ErrorResponse].`);
                const errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, Severity.Error, `Error: ${errorResponse.Message}`);
            }
        }
    }
    /**
     * Use to mark the form as touched; includes all form controls;
     */
    markFormAsTouched(form) {
        form.markAsTouched({ onlySelf: false });
        Object.values(form.controls).forEach((control) => {
            control.markAsTouched();
        });
    }
    /**
     * Use to log an unexpected error.
     */
    logError(error, message) {
        if (error instanceof Error) {
            this.loggingService.log(this.componentName, Severity.Error, message, [`${error.stack}`]);
        }
        else {
            this.loggingService.log(this.componentName, Severity.Error, message);
        }
    }
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    retrieveServiceContextErrorMessages(serviceContext) {
        const messages = Array();
        serviceContext.Messages.forEach((e) => {
            if (e.MessageType === MessageType.Error && e.DisplayToUser) {
                messages.push(e.Message);
            }
        });
        return messages;
    }
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    retrieveResponseErrorMessages(errorResponse) {
        const errors = new Array();
        if (errorResponse && errorResponse.Errors) {
            errorResponse.Errors.forEach((e) => {
                if (e.DisplayToUser) {
                    errors.push(e.Message);
                }
            });
        }
        return errors;
    }
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    resetAlertNotifications() {
        this.alertNotification = new AlertNotification('', '');
    }
    /**
     * Use to navigate to the specified route.
     * @parm routeName The name of the target route.
     */
    routeTo(routeName) {
        try {
            this.router.navigate([routeName]);
        }
        catch (error) {
            this.loggingService.log(this.componentName, Severity.Error, `Error while attempting to navigate to [${routeName}] route from ${this.componentName}. Error: ${error.toString()}`);
        }
    }
    /**
     * Use to retrieve and show any response error messages.
     */
    showResponseErrors(response) {
        this.handleServiceErrors(response, undefined);
    }
    finishRequest(message) {
        this.loggingService.log(this.componentName, Severity.Information, `${this.componentName}: ${message}`);
    }
    showAlertMessage(message) {
        alert(message);
    }
};
ComponentBase = __decorate([
    Inject({}),
    __metadata("design:paramtypes", [String, LoggingService, Router])
], ComponentBase);
export { ComponentBase };
//# sourceMappingURL=component-base.component.js.map