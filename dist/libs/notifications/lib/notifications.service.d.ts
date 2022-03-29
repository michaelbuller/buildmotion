import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { ApiMessage, ApiResponse } from "@buildmotion/core";
import { Observable } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { NotificationOptions } from './models/notification-options.model';
import { Notification } from './models/notification.model';
import * as i0 from "@angular/core";
/**
 * The NotificationService is used to manage the publishing of notifications
 * messages for an application. This service will publish notifications, however,
 * the application will require a subscription or a notifier that will handle new
 * published notifications for display.
 */
export declare class NotificationService extends ServiceBase {
    private businessProvider;
    private addApiResponseSubscription;
    private addMessageSubscription;
    private apiMessagesSubject;
    private notificationsSubject$;
    private browserNotificationSubject$;
    readonly apiMessages$: Observable<ApiMessage[]>;
    readonly notifications$: Observable<Notification>;
    readonly browserNotification$: Observable<boolean>;
    constructor(logger: LoggingService, serviceContext: ServiceContext, businessProvider: BusinessProviderService);
    /**
     * Use to publish a new API error message.
     * @param apiResponse
     */
    addApiResponse<T extends Notification>(apiResponse: ApiResponse<T>): void;
    /**
     * Use to add a new [Notification] to the service. Valid notifications
     * are published to all subscribers (for display).
     */
    addMessage(message: Notification, options?: NotificationOptions): void;
    /**
     * Use to reset the notification service - removes all messages.
     */
    reset(): void;
    /**
     * Use to handle the validation response for an API that contains
     * error response messages to publish.
     * @param response
     */
    private handleAddApiResponse;
    /**
     * Use to handle the response of a notification validation.
     * @param response an ApiResponse<Notification> where the [Data] payload is of type [Notification]
     *
     */
    private handleAddMessage;
    private handleServiceErrors;
    /**
     * Use to manage the subscription for processing a new notification message.
     */
    private finishAddMessageRequest;
    /**
     * Use to finish processing API messages.
     * @param serviceName
     */
    private finishAddApiRequest;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, [null, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
