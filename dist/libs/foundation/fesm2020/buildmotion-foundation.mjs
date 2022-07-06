import * as i0 from '@angular/core';
import { NgModule, Injectable, Inject, inject, InjectFlags } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionResult } from '@buildmotion/actions';
import { ApiResponse, ApiMessage, ApiMessageType } from '@buildmotion/core';
import { Severity, LoggingService } from '@buildmotion/logging';
import { CompositeRule } from '@buildmotion/rules-engine';
import { of, throwError, Subscription } from 'rxjs';
import { __decorate, __metadata, __param } from 'tslib';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

class FoundationModule {
}
FoundationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FoundationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FoundationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FoundationModule, imports: [CommonModule] });
FoundationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FoundationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FoundationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class ServiceResponse {
    constructor() {
        this.Errors = new Array();
    }
}

class ErrorResponse extends ServiceResponse {
    constructor() {
        super();
        this.IsSuccess = false;
    }
}

/**
 * Use to indicate the type for the [ServiceMessage].
 */
var MessageType;
(function (MessageType) {
    /**
     * Use to indicate the message type is informational.
     */
    MessageType[MessageType["Information"] = 1] = "Information";
    /**
     * Use to indicate the message type is warning.
     */
    MessageType[MessageType["Warning"] = 2] = "Warning";
    /**
     * Use to indicate the message type is error.
     */
    MessageType[MessageType["Error"] = 3] = "Error";
})(MessageType || (MessageType = {}));

/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
class ServiceContext {
    constructor() {
        /**
         * A list of service messages added by the application during the processing of the
         * specified service request.
         */
        this.Messages = new Array();
    }
    /**
     * Use this method to add a new message to the [ServiceContext].
     */
    addMessage(message) {
        this.Messages.push(message);
    }
    /**
     * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
     */
    hasErrors() {
        if (this.Messages && this.Messages.length > 0) {
            const errorMessages = this.Messages.filter((f) => f.MessageType === MessageType.Error);
            if (errorMessages.length > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Use to determine if the current [ServiceContext] does not contain any errors.
     */
    isGood() {
        if (this.Messages && this.Messages.length > 0) {
            const errorMessages = this.Messages.filter((f) => f.MessageType === MessageType.Error);
            if (errorMessages.length > 0) {
                return false;
            }
        }
        return true;
    }
}
ServiceContext.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ServiceContext.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Use this class to create a message for the current [ServiceContext].
 */
class ServiceMessage {
    /**
     *
     * @param name The name of the message.
     * @param message The display text of the message.
     * @param messageType: Indicates the type of message.
     * @param source: Indicates the source of the message.
     * @param displayToUser Use to indicate if the specified message should be displayed to the user.
     */
    constructor(name, message, messageType, source, displayToUser = false) {
        /** Use to specify  */
        this.MessageType = MessageType.Information;
        /** Use to indicate the source of the message. */
        this.Source = '';
        /** Use to indicate if the specified message should be displayed to the user. */
        this.DisplayToUser = false;
        this.Name = name;
        this.Message = message;
        if (message) {
            this.MessageType = messageType;
        }
        if (source) {
            this.Source = source;
        }
        this.DisplayToUser = displayToUser;
    }
    /**
     * Use this extension method to add the name of the message.
     * @param name The name of the service message.
     */
    WithName(name) {
        this.Name = name;
        return this;
    }
    /**
     * Use this extension method to add the message text to the ServiceMessage item.
     * @param message The display text of the service message.
     */
    WithMessage(message) {
        this.Message = message;
        return this;
    }
    /**
     * Use this extension method to set the [MessageType] of the ServiceMessage item.
     * @param messageType: Use to indicate the message type.
     */
    WithMessageType(messageType) {
        this.MessageType = messageType;
        return this;
    }
    /**
     * Use this extension method to set the [Source] of the ServiceMessage item.
     * @param source: Use to indicate the source of the message.
     */
    WithSource(source) {
        this.Source = source;
        return this;
    }
    /**
     * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
     * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
     */
    WithDisplayToUser(displayToUser) {
        this.DisplayToUser = displayToUser;
        return this;
    }
    /**
     * Use this method return a string representing the ServiceMessage.
     */
    toString() {
        return `Name: ${this.Name}; Message: ${this.Message}; MessageType: ${this.MessageType.toString()}; Source: ${this.Source}; DisplayToUser: ${this.DisplayToUser}`;
    }
}

/**
 * This is the application's base Action class that provides implementation of pipeline methods - pre/post
 * execution methods.
 *
 * The pre-execute methods that can be implemented are:
 *		1. start();
 *		2. audit();
 *		3. preValidateAction();
 *		4. evaluateRules();
 *		5. postValidateAction();
 *		6. preExecuteAction();
 *
 *If the status of action is good, the business logic will be executed using the:
 *		1. processAction();
 *
 * The post-execution methods that can be implemented are:
 *		1. postExecuteAction();
 *		2. validateActionResult();
 *		3. finish();
 */
class ActionBase extends Action {
    constructor(actionName) {
        super();
        this.serviceContext = new ServiceContext();
        this.response = this.createUnknownResponse();
        this.actionName = actionName ?? '';
    }
    start() {
        // this.loggingService?.log(
        //   this.actionName,
        //   Severity.Information,
        //   `Preparing to [start] action.`
        // );
    }
    audit() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [audit] action.`);
    }
    createUnknownResponse() {
        const response = new ApiResponse();
        return of(response);
    }
    preExecuteAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [preExecuteAction] action.`);
    }
    performAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to perform [${this.actionName}].`);
    }
    preValidateAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to preValidateAction [${this.actionName}].`);
    }
    finish() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [finish] action.`);
    }
    /**
     * This is a required implementation if you want to render/execute the rules that
     * are associated to the specified action.
     */
    validateAction() {
        return this.validationContext.renderRules();
    }
    postValidateAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to determine if the action contains validation errors in ${this.actionName}`);
        if (this.validationContext.hasRuleViolations()) {
            this.loggingService?.log(this.actionName, Severity.Information, `The target contains validation errors in ${this.actionName}`);
            // Load the error/rule violations into the ServiceContext so that the information bubbles up to the caller of the service;
            this.validationContext.results.forEach((result) => {
                if (!result.isValid) {
                    this.publishRuleResult(result);
                    this.retrieveRuleDetails(result);
                }
            });
            this.response = this.createFailResponse();
        }
    }
    createFailResponse() {
        const apiResponse = new ApiResponse();
        apiResponse.isSuccess = false;
        apiResponse.message = `Request failed.`;
        const messages = new Array();
        if (this.serviceContext.hasErrors() && this.serviceContext.Messages.length > 0) {
            this.serviceContext.Messages.map((m) => {
                const error = new ApiMessage();
                error.message = m.Message;
                error.messageType = ApiMessageType.Error;
                error.code = m.Name;
                messages.push(error);
            });
        }
        apiResponse.messages = messages.length > 0 ? messages : [];
        return of(apiResponse);
    }
    postExecuteAction() {
        if (this.actionResult === ActionResult.Fail) {
            this.serviceContext.Messages.forEach((e) => {
                if (e.MessageType === MessageType.Error) {
                    this.loggingService?.log(this.actionName, Severity.Error, e.toString());
                }
            });
        }
    }
    /**
     * All concrete actions must override and implement this method. It is defined in the [Action] framework class.
     */
    validateActionResult() {
        this.loggingService?.log(this.actionName, Severity.Information, `Running [validateActionResult] for ${this.actionName}.`);
        // determine the status of the action based on any rule violations;
        if (this.validationContext.hasRuleViolations()) {
            this.loggingService?.log(this.actionName, Severity.Error, `The ${this.actionName} contains rule violations.`);
            this.actionResult = ActionResult.Fail;
            const errorResponse = new ErrorResponse();
            errorResponse.IsSuccess = false;
            errorResponse.Message = `Validation errors exist.`;
            this.response = throwError(errorResponse);
        }
        this.actionResult = this.serviceContext.isGood() ? ActionResult.Success : ActionResult.Fail;
        return this.actionResult;
    }
    /**
     * Use to process rule results for composite rules. Note, that this function is recursive
     * and will process all composite rules in the rule set contained in the ValidationContext.
     * @param ruleResult The result of a rendered rule.
     */
    retrieveRuleDetails(ruleResult) {
        if (ruleResult.rulePolicy instanceof CompositeRule) {
            const composite = ruleResult.rulePolicy;
            if (composite && composite.hasErrors) {
                const errors = composite.results.filter((result) => !result.isValid && result.rulePolicy && result.rulePolicy.isDisplayable);
                errors.forEach((errorResult) => {
                    this.publishRuleResult(errorResult);
                    if (errorResult.rulePolicy instanceof CompositeRule) {
                        this.retrieveRuleDetails(errorResult);
                    }
                });
            }
        }
    }
    /**
     * A helper function to publish a new [ServiceMessage] to the [ServiceContext.Messages] list.
     * @param ruleResult
     */
    publishRuleResult(ruleResult) {
        const serviceMessage = new ServiceMessage(ruleResult.rulePolicy.name, ruleResult.rulePolicy.message, MessageType.Error);
        serviceMessage.DisplayToUser = ruleResult.rulePolicy.isDisplayable;
        serviceMessage.Source = this.actionName;
        this.serviceContext.Messages.push(serviceMessage);
        this.loggingService?.log(this.actionName, Severity.Error, `${serviceMessage.toString()}`);
    }
}

/**
 * Use to provide the alert type information for the AlertNotification and AlertComponent.
 */
class AlertTypes {
}
AlertTypes.Information = 'alert-info';
AlertTypes.Warning = 'alert-warning';
AlertTypes.Danger = 'alert-danger';
AlertTypes.Success = 'alert-success';

class AlertNotification {
    constructor(header, title, messages, type) {
        this.type = AlertTypes.Information; // alert-warning, alert-success, alert-info, alert-danger
        this.messages = new Array();
        this.showAlert = false;
        if (type) {
            this.type = type;
        }
        this.header = header;
        this.title = title;
        if (messages) {
            this.messages = messages;
        }
        if (this.header && this.title) {
            this.showAlert = true; // used to trigger the display of the notification.
        }
    }
}

/**
 * Use the business provider base class to access common elements of the business provider.
 *
 * serviceContext: This is initialized for each instance of a business provider - its purpose is to collect information during the processing of business logic.
 */
class BusinessProviderBase {
    constructor(providerName, loggingService) {
        this.loggingService = loggingService;
        this.providerName = providerName;
        this.loggingService.log(this.providerName, Severity.Information, `Running constructor for the [${this.providerName}].`);
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
        const message = new ServiceMessage(error.name, error.message)
            .WithDisplayToUser(true)
            .WithMessageType(MessageType.Error)
            .WithSource(this.providerName);
        const logItem = `${message.toString()}; ${error.stack}`;
        this.loggingService.log(this.providerName, Severity.Error, logItem);
        this.serviceContext.addMessage(message);
    }
    finishRequest(sourceName) {
        this.loggingService.log(this.providerName, Severity.Information, `Request for [${sourceName}] by ${this.providerName} is complete.`);
        if (this.serviceContext.hasErrors()) {
            this.loggingService.log(this.providerName, Severity.Information, `Preparing to write out the errors.`);
            this.serviceContext.Messages.filter((f) => f.DisplayToUser && f.MessageType === MessageType.Error).forEach((e) => this.loggingService.log(this.providerName, Severity.Error, e.toString()));
        }
    }
}

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
            this.loggingService.log(this.componentName, Severity.Error, `Error while attempting to navigate to [${routeName}] route from ${this.componentName}. Error: ${error.message.toString()}`);
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

/**
 * Use this model to represent service error/message information from the
 * application's service APIs.
 *
 * The DisplayToUser boolean value indicates whether the message should be
 * displayed to the user if desired.
 */
class ServiceError {
}

class SingletonServiceBase extends ServiceBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(type, loggingService, serviceName, serviceContext) {
        super(serviceName, loggingService, serviceContext);
        // eslint-disable-next-line no-bitwise
        const parent = inject(type, InjectFlags.Optional | InjectFlags.SkipSelf);
        if (parent) {
            throw Error(`Cannot create multiple instances of provider: [${type}]`);
        }
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { ActionBase, AlertNotification, AlertTypes, BusinessProviderBase, ComponentBase, ErrorResponse, FoundationModule, MessageType, ServiceBase, ServiceContext, ServiceError, ServiceMessage, ServiceResponse, SingletonServiceBase };
//# sourceMappingURL=buildmotion-foundation.mjs.map
