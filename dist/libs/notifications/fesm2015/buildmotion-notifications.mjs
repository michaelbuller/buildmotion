import * as i0 from '@angular/core';
import { NgModule, Injectable, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@buildmotion/foundation';
import { ActionBase, ServiceBase, ServiceResponse } from '@buildmotion/foundation';
import * as i1$1 from '@buildmotion/logging';
import { Severity } from '@buildmotion/logging';
import { ApiResponse } from '@buildmotion/core';
import { of, ReplaySubject } from 'rxjs';
import { IsNotNullOrUndefined, IsTrue, Range, StringIsNotNullEmptyRange } from '@buildmotion/rules-engine';
import { ActionResult } from '@buildmotion/actions';

class NotificationsModule {
}
NotificationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: NotificationsModule, imports: [CommonModule, i1.RouterModule] });
NotificationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationsModule, imports: [CommonModule,
        RouterModule.forChild([
        /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
        ])] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild([
                        /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
                        ]),
                    ],
                }]
        }] });

/**
 * Use as the container for API error state management.
 */
class ErrorState {
}

/**
 * Use to define error state mappings for a specific API operation.
 */
class ErrorStateOperation {
    constructor(operation, domain) {
        this.errors = new Map();
        this.operation = operation;
        this.domain = domain;
    }
}

var NotificationSeverity;
(function (NotificationSeverity) {
    NotificationSeverity["information"] = "information";
    NotificationSeverity["warning"] = "warning";
    NotificationSeverity["error"] = "error";
    NotificationSeverity["success"] = "success";
})(NotificationSeverity || (NotificationSeverity = {}));

var NotifierType;
(function (NotifierType) {
    NotifierType["Unknown"] = "Unknown";
    NotifierType["Banner"] = "Banner";
    NotifierType["Dialog"] = "Dialog";
    NotifierType["Snackbar"] = "Snackbar";
    NotifierType["Confirmation"] = "Confirmation";
    NotifierType["Toast"] = "Toast";
})(NotifierType || (NotifierType = {}));

class Notification {
    constructor(title, description, notifierType, severity, messages, options) {
        this.messages = [];
        this.severity = NotificationSeverity.information;
        this.title = title;
        this.description = description;
        this.messages = messages ? messages : [];
        this.severity = severity ? severity : NotificationSeverity.information;
        this.notifierType = notifierType ? notifierType : NotifierType.Unknown;
        this.options = options;
    }
}

class NotificationOptions {
    constructor(actionButtonText, cancelButtonText) {
        this.actionButtonText = actionButtonText;
        this.cancelButtonText = cancelButtonText;
    }
}

/**
 * A helper class to provide the action with required dependencies and
 * starting the execution of the action life-cycle pipeline.
 */
class BusinessActionBase extends ActionBase {
    // override loggingService!: ILoggingService;
    // override actionName: string;
    constructor(actionName) {
        super();
        this.showRuleMessages = true;
        this.hideRuleMessages = false;
        this.actionName = actionName;
    }
    /**
     * Use the [Do] method to perform the action. Also uses [inversion of control]
     * and provides the action the same instance of the [service context] and
     * [logging service].
     */
    Do(businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
        return this.response;
    }
}

class ValidateApiResponseAction extends BusinessActionBase {
    constructor(apiResponse) {
        super('ValidateApiResponseAction');
        this.apiResponse = apiResponse;
    }
    preValidateAction() {
        this.loggingService.log(this.actionName, Severity.Information, `Preparing to validate the API response for error messages.`);
        this.validationContext.addRule(new IsNotNullOrUndefined('ApiResponseIsValid', 'The API response cannot be null or undefined.', this.apiResponse, false));
        if (this.apiResponse) {
            this.validationContext.addRule(new IsNotNullOrUndefined('ApiMessagesNotNullUndefined', 'The API response messages is not valid. Cannot be null or undefined.', this.apiResponse.messages, false)).addRule(new IsTrue("ContainsValidMessage", 'The API response requires a valid message.', this.apiResponse.messages.length > 0, this.hideRuleMessages));
        }
        if (this.apiResponse && this.apiResponse.messages) {
            this.validationContext.addRule(new Range('MessagesLengthMin', 'The API response must contain at least one valid message item.', this.apiResponse.messages.length, 1, 99));
            this.apiResponse.messages.forEach((item) => {
                this.validationContext.addRule(new StringIsNotNullEmptyRange('MessageErrorCodeIsValid', 'The message does not contain a valid error code.', item.code, 1, 200));
            });
        }
    }
    performAction() {
        this.actionResult = ActionResult.Success;
        const result = this.apiResponse.messages;
        const successApiMessage = new ApiResponse();
        successApiMessage.isSuccess = true;
        successApiMessage.data = result;
        this.response = of(successApiMessage);
    }
}

class ValidateNotificationAction extends BusinessActionBase {
    /**
     * Use the constructor to provide any required inputs for the action.
     */
    constructor(notification) {
        super('ValidateNotificationAction');
        this.doNotDisplayToUser = false;
        this.notification = notification;
    }
    /**
     * Use this pipeline method as an opportunity to
     * setup the action for processing, validating business rules, and/or
     * performing other data validation.
     *
     * This method runs before [validationAction] and [performAction].
     */
    preValidateAction() {
        this.validationContext
            .addRule(new IsNotNullOrUndefined('FormMessageIsNotNull', 'The form message cannot be null or undefined.', this.notification, this.doNotDisplayToUser))
            .addRule(new StringIsNotNullEmptyRange('MessageTitleIsValid', 'The message title is not valid. Must be within 2 and 45 characters.', this.notification.title, 2, 45, this.doNotDisplayToUser))
            .addRule(new StringIsNotNullEmptyRange('MessageDescriptionIsValid', 'The message description is not valid. Must be within 1 and 200 characters.', this.notification.description, 1, 200, this.doNotDisplayToUser))
            .addRule(new IsNotNullOrUndefined('NotifierTypeIsValid', 'The notifier type is not valid.', this.notification.notifierType, this.doNotDisplayToUser));
        this.notification.messages.forEach((item) => {
            this.validationContext.addRule(new StringIsNotNullEmptyRange('MessageIsValid', 'The message item is not valid. Must be within 2 and 125 characters.', item, 2, 125));
        });
    }
    /**
     * Use this method to implement the action's business logic. This
     * method will execute if there are no validation or business rule violations.
     *
     * Wraps the response in an ApiResponse to return the value using the action's [response] property.
     */
    performAction() {
        this.actionResult = ActionResult.Success;
        const data = this.notification;
        const successApiMessage = new ApiResponse();
        successApiMessage.isSuccess = true;
        successApiMessage.data = data;
        this.response = of(successApiMessage);
    }
}

class BusinessProviderService extends ServiceBase {
    constructor(logger, serviceContext) {
        super('NotificationService.BusinessProviderService', logger, serviceContext);
    }
    /**
     * Use to execute one or more actions to process the business operation.
     * @param message a message to display form information to a user.
     */
    validateNotification(message) {
        const action = new ValidateNotificationAction(message);
        return action.Do(Object.assign({}, this));
    }
    validateApiResponse(apiResponse) {
        const action = new ValidateApiResponseAction(apiResponse);
        return action.Do(Object.assign({}, this));
    }
}
BusinessProviderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, deps: [{ token: i1$1.LoggingService }, { token: i2.ServiceContext }], target: i0.ɵɵFactoryTarget.Injectable });
BusinessProviderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.LoggingService }, { type: i2.ServiceContext }]; } });

/**
 * The NotificationService is used to manage the publishing of notifications
 * messages for an application. This service will publish notifications, however,
 * the application will require a subscription or a notifier that will handle new
 * published notifications for display.
 */
class NotificationService extends ServiceBase {
    constructor(logger, serviceContext, businessProvider) {
        super('NotificationService', logger, serviceContext);
        this.businessProvider = businessProvider;
        this.apiMessagesSubject = new ReplaySubject(1);
        this.notificationsSubject$ = new ReplaySubject(1);
        this.browserNotificationSubject$ = new ReplaySubject();
        this.apiMessages$ = this.apiMessagesSubject.asObservable();
        this.notifications$ = this.notificationsSubject$.asObservable();
        this.browserNotification$ = this.browserNotificationSubject$.asObservable();
    }
    /**
     * Use to publish a new API error message.
     * @param apiResponse
     */
    addApiResponse(apiResponse) {
        this.addApiResponseSubscription = this.businessProvider.validateApiResponse(apiResponse).subscribe((response) => this.handleAddApiResponse(response), (error) => this.handleServiceErrors(error), () => this.finishAddApiRequest());
    }
    /**
     * Use to add a new [Notification] to the service. Valid notifications
     * are published to all subscribers (for display).
     */
    addMessage(message, options) {
        this.addMessageSubscription = this.businessProvider.validateNotification(message).subscribe((response) => this.handleAddMessage(response, options), (error) => this.handleServiceErrors(error), () => this.finishAddMessageRequest());
    }
    /**
     * Use to reset the notification service - removes all messages.
     */
    reset() {
        this.notificationsSubject$.next(null);
        this.apiMessagesSubject.next(null);
    }
    /**
     * Use to handle the validation response for an API that contains
     * error response messages to publish.
     * @param response
     */
    handleAddApiResponse(response) {
        if (response instanceof ApiResponse) {
            if (response.isSuccess && response instanceof ApiResponse) {
                this.loggingService.log(this.serviceName, Severity.Information, `Preparing to notify [API Message] subscribers.`);
                this.apiMessagesSubject.next(response.data);
            }
            else if (!response.isSuccess && response instanceof ApiResponse) {
                this.handleServiceErrors(response);
            }
        }
    }
    /**
     * Use to handle the response of a notification validation.
     * @param response an ApiResponse<Notification> where the [Data] payload is of type [Notification]
     *
     */
    handleAddMessage(response, options) {
        if (response instanceof ApiResponse) {
            if (response.isSuccess && response instanceof ApiResponse && response.data) {
                const message = response.data;
                this.loggingService.log(this.serviceName, Severity.Information, `Preparing to notify notification subscribers of new message: ${message.title}`);
                if (message instanceof Notification && options) {
                    message.options = options;
                }
                this.notificationsSubject$.next(message);
            }
            else if (!response.isSuccess && response instanceof ApiResponse) {
                this.handleServiceErrors(response);
            }
        }
    }
    handleServiceErrors(response) {
        if (!response.IsSuccess && response instanceof ServiceResponse && response.Errors) {
            const message = new Notification();
            message.messages = [response.Message];
            message.severity = NotificationSeverity.error;
            message.notifierType = NotifierType.Toast;
            message.title = response.Message;
            message.description = response.Message;
            this.loggingService.log(this.serviceName, Severity.Information, `Preparing to notify notification subscribers of new message: ${message.title}`);
            this.notificationsSubject$.next(message);
        }
        this.loggingService.log(this.serviceName, Severity.Error, `Failed to process notification message. ${response}`);
    }
    /**
     * Use to manage the subscription for processing a new notification message.
     */
    finishAddMessageRequest() {
        this.finishRequest(this.serviceName);
        if (this.addMessageSubscription) {
            this.addMessageSubscription.unsubscribe();
        }
    }
    /**
     * Use to finish processing API messages.
     * @param serviceName
     */
    finishAddApiRequest() {
        this.finishRequest(this.serviceName);
        if (this.addApiResponseSubscription) {
            this.addApiResponseSubscription.unsubscribe();
        }
    }
}
NotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, deps: [{ token: i1$1.LoggingService }, { token: i2.ServiceContext, optional: true }, { token: BusinessProviderService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: i1$1.LoggingService }, { type: i2.ServiceContext, decorators: [{
                        type: Optional
                    }] }, { type: BusinessProviderService }];
    } });

class NotificationServiceMock {
    addApiResponse() {
        return null;
    }
    addMessage() {
        return null;
    }
    reset() {
        return null;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { ErrorState, ErrorStateOperation, Notification, NotificationOptions, NotificationService, NotificationServiceMock, NotificationSeverity, NotificationsModule, NotifierType };
//# sourceMappingURL=buildmotion-notifications.mjs.map
