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
NotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, deps: [{ token: i1.LoggingService }, { token: i2.ServiceContext, optional: true }, { token: i3.BusinessProviderService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.LoggingService }, { type: i2.ServiceContext, decorators: [{
                    type: Optional
                }] }, { type: i3.BusinessProviderService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9ub3RpZmljYXRpb25zL3NyYy9saWIvbm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBYyxhQUFhLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRTNEOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQVc7SUFXbEQsWUFBWSxNQUFzQixFQUFjLGNBQThCLEVBQVUsZ0JBQXlDO1FBQy9ILEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFEaUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQVJ6SCx1QkFBa0IsR0FBdUMsSUFBSSxhQUFhLENBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ25HLDBCQUFxQixHQUF1QyxJQUFJLGFBQWEsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFDdEcsZ0NBQTJCLEdBQTJCLElBQUksYUFBYSxF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QUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Z0hBdEhVLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBWXNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmljZUJhc2UsIFNlcnZpY2VDb250ZXh0LCBTZXJ2aWNlUmVzcG9uc2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSwgU2V2ZXJpdHkgfSBmcm9tICdAYnVpbGRtb3Rpb24vbG9nZ2luZyc7XG5pbXBvcnQgeyBBcGlNZXNzYWdlLCBBcGlSZXNwb25zZSB9IGZyb20gXCJAYnVpbGRtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCdXNpbmVzc1Byb3ZpZGVyU2VydmljZSB9IGZyb20gJy4vYnVzaW5lc3MvYnVzaW5lc3MtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvbm90aWZpY2F0aW9uLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V2ZXJpdHkgfSBmcm9tICcuL21vZGVscy9ub3RpZmljYXRpb24tc2V2ZXJpdHkuZW51bSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgTm90aWZpZXJUeXBlIH0gZnJvbSAnLi9tb2RlbHMvbm90aWZpZXItdHlwZS5lbnVtJztcblxuLyoqXG4gKiBUaGUgTm90aWZpY2F0aW9uU2VydmljZSBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgcHVibGlzaGluZyBvZiBub3RpZmljYXRpb25zXG4gKiBtZXNzYWdlcyBmb3IgYW4gYXBwbGljYXRpb24uIFRoaXMgc2VydmljZSB3aWxsIHB1Ymxpc2ggbm90aWZpY2F0aW9ucywgaG93ZXZlcixcbiAqIHRoZSBhcHBsaWNhdGlvbiB3aWxsIHJlcXVpcmUgYSBzdWJzY3JpcHRpb24gb3IgYSBub3RpZmllciB0aGF0IHdpbGwgaGFuZGxlIG5ld1xuICogcHVibGlzaGVkIG5vdGlmaWNhdGlvbnMgZm9yIGRpc3BsYXkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICBwcml2YXRlIGFkZEFwaVJlc3BvbnNlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGFkZE1lc3NhZ2VTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYXBpTWVzc2FnZXNTdWJqZWN0OiBSZXBsYXlTdWJqZWN0PEFwaU1lc3NhZ2VbXSB8IG51bGw+ID0gbmV3IFJlcGxheVN1YmplY3Q8QXBpTWVzc2FnZVtdIHwgbnVsbD4oMSk7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uc1N1YmplY3QkOiBSZXBsYXlTdWJqZWN0PE5vdGlmaWNhdGlvbiB8IG51bGw+ID0gbmV3IFJlcGxheVN1YmplY3Q8Tm90aWZpY2F0aW9uIHwgbnVsbD4oMSk7XG4gIHByaXZhdGUgYnJvd3Nlck5vdGlmaWNhdGlvblN1YmplY3QkOiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgYXBpTWVzc2FnZXMkOiBPYnNlcnZhYmxlPEFwaU1lc3NhZ2VbXSB8IG51bGw+ID0gdGhpcy5hcGlNZXNzYWdlc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyByZWFkb25seSBub3RpZmljYXRpb25zJDogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24gfCBudWxsPiA9IHRoaXMubm90aWZpY2F0aW9uc1N1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgcmVhZG9ubHkgYnJvd3Nlck5vdGlmaWNhdGlvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyb3dzZXJOb3RpZmljYXRpb25TdWJqZWN0JC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dpbmdTZXJ2aWNlLCBAT3B0aW9uYWwoKSBzZXJ2aWNlQ29udGV4dDogU2VydmljZUNvbnRleHQsIHByaXZhdGUgYnVzaW5lc3NQcm92aWRlcjogQnVzaW5lc3NQcm92aWRlclNlcnZpY2UpIHtcbiAgICBzdXBlcignTm90aWZpY2F0aW9uU2VydmljZScsIGxvZ2dlciwgc2VydmljZUNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBwdWJsaXNoIGEgbmV3IEFQSSBlcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0gYXBpUmVzcG9uc2VcbiAgICovXG4gIGFkZEFwaVJlc3BvbnNlPFQgZXh0ZW5kcyBOb3RpZmljYXRpb24+KGFwaVJlc3BvbnNlOiBBcGlSZXNwb25zZTxUPikge1xuICAgIHRoaXMuYWRkQXBpUmVzcG9uc2VTdWJzY3JpcHRpb24gPSB0aGlzLmJ1c2luZXNzUHJvdmlkZXIudmFsaWRhdGVBcGlSZXNwb25zZTxUPihhcGlSZXNwb25zZSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB0aGlzLmhhbmRsZUFkZEFwaVJlc3BvbnNlPFQ+KHJlc3BvbnNlKSxcbiAgICAgIChlcnJvcikgPT4gdGhpcy5oYW5kbGVTZXJ2aWNlRXJyb3JzKGVycm9yKSxcbiAgICAgICgpID0+IHRoaXMuZmluaXNoQWRkQXBpUmVxdWVzdCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gYWRkIGEgbmV3IFtOb3RpZmljYXRpb25dIHRvIHRoZSBzZXJ2aWNlLiBWYWxpZCBub3RpZmljYXRpb25zXG4gICAqIGFyZSBwdWJsaXNoZWQgdG8gYWxsIHN1YnNjcmliZXJzIChmb3IgZGlzcGxheSkuXG4gICAqL1xuICBhZGRNZXNzYWdlKG1lc3NhZ2U6IE5vdGlmaWNhdGlvbiwgb3B0aW9ucz86IE5vdGlmaWNhdGlvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLmFkZE1lc3NhZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmJ1c2luZXNzUHJvdmlkZXIudmFsaWRhdGVOb3RpZmljYXRpb248Tm90aWZpY2F0aW9uPihtZXNzYWdlKS5zdWJzY3JpYmUoXG4gICAgICAocmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlQWRkTWVzc2FnZTxOb3RpZmljYXRpb24+KHJlc3BvbnNlLCBvcHRpb25zKSxcbiAgICAgIChlcnJvcikgPT4gdGhpcy5oYW5kbGVTZXJ2aWNlRXJyb3JzKGVycm9yKSxcbiAgICAgICgpID0+IHRoaXMuZmluaXNoQWRkTWVzc2FnZVJlcXVlc3QoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHJlc2V0IHRoZSBub3RpZmljYXRpb24gc2VydmljZSAtIHJlbW92ZXMgYWxsIG1lc3NhZ2VzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zU3ViamVjdCQubmV4dChudWxsKTtcbiAgICB0aGlzLmFwaU1lc3NhZ2VzU3ViamVjdC5uZXh0KG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBoYW5kbGUgdGhlIHZhbGlkYXRpb24gcmVzcG9uc2UgZm9yIGFuIEFQSSB0aGF0IGNvbnRhaW5zXG4gICAqIGVycm9yIHJlc3BvbnNlIG1lc3NhZ2VzIHRvIHB1Ymxpc2guXG4gICAqIEBwYXJhbSByZXNwb25zZVxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVBZGRBcGlSZXNwb25zZTxUPihyZXNwb25zZTogQXBpUmVzcG9uc2U8VD4pOiB2b2lkIHtcbiAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBBcGlSZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLmlzU3VjY2VzcyAmJiByZXNwb25zZSBpbnN0YW5jZW9mIEFwaVJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuc2VydmljZU5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIG5vdGlmeSBbQVBJIE1lc3NhZ2VdIHN1YnNjcmliZXJzLmApO1xuICAgICAgICB0aGlzLmFwaU1lc3NhZ2VzU3ViamVjdC5uZXh0KDxhbnk+cmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKCFyZXNwb25zZS5pc1N1Y2Nlc3MgJiYgcmVzcG9uc2UgaW5zdGFuY2VvZiBBcGlSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVNlcnZpY2VFcnJvcnMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gaGFuZGxlIHRoZSByZXNwb25zZSBvZiBhIG5vdGlmaWNhdGlvbiB2YWxpZGF0aW9uLlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgYW4gQXBpUmVzcG9uc2U8Tm90aWZpY2F0aW9uPiB3aGVyZSB0aGUgW0RhdGFdIHBheWxvYWQgaXMgb2YgdHlwZSBbTm90aWZpY2F0aW9uXVxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVBZGRNZXNzYWdlPFQgZXh0ZW5kcyBOb3RpZmljYXRpb24+KHJlc3BvbnNlOiBBcGlSZXNwb25zZTxUPiwgb3B0aW9ucz86IE5vdGlmaWNhdGlvbk9wdGlvbnMpIHtcbiAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBBcGlSZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLmlzU3VjY2VzcyAmJiByZXNwb25zZSBpbnN0YW5jZW9mIEFwaVJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogTm90aWZpY2F0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gbm90aWZ5IG5vdGlmaWNhdGlvbiBzdWJzY3JpYmVycyBvZiBuZXcgbWVzc2FnZTogJHttZXNzYWdlLnRpdGxlfWApO1xuXG4gICAgICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgTm90aWZpY2F0aW9uICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICBtZXNzYWdlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1N1YmplY3QkLm5leHQobWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKCFyZXNwb25zZS5pc1N1Y2Nlc3MgJiYgcmVzcG9uc2UgaW5zdGFuY2VvZiBBcGlSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVNlcnZpY2VFcnJvcnMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VydmljZUVycm9ycyhyZXNwb25zZTogYW55KSB7XG4gICAgaWYgKCFyZXNwb25zZS5Jc1N1Y2Nlc3MgJiYgcmVzcG9uc2UgaW5zdGFuY2VvZiBTZXJ2aWNlUmVzcG9uc2UgJiYgcmVzcG9uc2UuRXJyb3JzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE5vdGlmaWNhdGlvbigpO1xuICAgICAgbWVzc2FnZS5tZXNzYWdlcyA9IFtyZXNwb25zZS5NZXNzYWdlXTtcbiAgICAgIG1lc3NhZ2Uuc2V2ZXJpdHkgPSBOb3RpZmljYXRpb25TZXZlcml0eS5lcnJvcjtcbiAgICAgIG1lc3NhZ2Uubm90aWZpZXJUeXBlID0gTm90aWZpZXJUeXBlLlRvYXN0O1xuICAgICAgbWVzc2FnZS50aXRsZSA9IHJlc3BvbnNlLk1lc3NhZ2U7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gcmVzcG9uc2UuTWVzc2FnZTtcbiAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuc2VydmljZU5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIG5vdGlmeSBub3RpZmljYXRpb24gc3Vic2NyaWJlcnMgb2YgbmV3IG1lc3NhZ2U6ICR7bWVzc2FnZS50aXRsZX1gKTtcblxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU3ViamVjdCQubmV4dChtZXNzYWdlKTtcbiAgICB9XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuRXJyb3IsIGBGYWlsZWQgdG8gcHJvY2VzcyBub3RpZmljYXRpb24gbWVzc2FnZS4gJHtyZXNwb25zZX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gbWFuYWdlIHRoZSBzdWJzY3JpcHRpb24gZm9yIHByb2Nlc3NpbmcgYSBuZXcgbm90aWZpY2F0aW9uIG1lc3NhZ2UuXG4gICAqL1xuICBwcml2YXRlIGZpbmlzaEFkZE1lc3NhZ2VSZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMuZmluaXNoUmVxdWVzdCh0aGlzLnNlcnZpY2VOYW1lKTtcbiAgICBpZiAodGhpcy5hZGRNZXNzYWdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmFkZE1lc3NhZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGZpbmlzaCBwcm9jZXNzaW5nIEFQSSBtZXNzYWdlcy5cbiAgICogQHBhcmFtIHNlcnZpY2VOYW1lXG4gICAqL1xuICBwcml2YXRlIGZpbmlzaEFkZEFwaVJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5maW5pc2hSZXF1ZXN0KHRoaXMuc2VydmljZU5hbWUpO1xuICAgIGlmICh0aGlzLmFkZEFwaVJlc3BvbnNlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmFkZEFwaVJlc3BvbnNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=