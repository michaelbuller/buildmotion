import { Injectable, Optional } from '@angular/core';
import { ServiceBase, ServiceContext, ServiceResponse } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';
import { ApiResponse } from "@buildmotion/core";
import { ReplaySubject } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { NotificationSeverity } from './models/notification-severity.enum';
import { Notification } from './models/notification.model';
import { NotifierType } from './models/notifier-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/logging";
import * as i2 from "@buildmotion/foundation";
import * as i3 from "./business/business-provider.service";
/**
 * The NotificationService is used to manage the publishing of notifications
 * messages for an application. This service will publish notifications, however,
 * the application will require a subscription or a notifier that will handle new
 * published notifications for display.
 */
export class NotificationService extends ServiceBase {
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
        this.notificationsSubject$.next(undefined);
        this.apiMessagesSubject.next(undefined);
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
NotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotificationService, deps: [{ token: i1.LoggingService }, { token: i2.ServiceContext, optional: true }, { token: i3.BusinessProviderService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.LoggingService }, { type: i2.ServiceContext, decorators: [{
                    type: Optional
                }] }, { type: i3.BusinessProviderService }]; } });
//# sourceMappingURL=notifications.service.js.map