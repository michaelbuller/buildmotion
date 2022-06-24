import { BusinessActionBase } from './business-action-base';
import { Notification } from '../../models/notification.model';
export declare class ValidateNotificationAction<T> extends BusinessActionBase<T> {
    notification: Notification;
    doNotDisplayToUser: boolean;
    /**
     * Use the constructor to provide any required inputs for the action.
     */
    constructor(notification: Notification);
    /**
     * Use this pipeline method as an opportunity to
     * setup the action for processing, validating business rules, and/or
     * performing other data validation.
     *
     * This method runs before [validationAction] and [performAction].
     */
    preValidateAction(): void;
    /**
     * Use this method to implement the action's business logic. This
     * method will execute if there are no validation or business rule violations.
     *
     * Wraps the response in an ApiResponse to return the value using the action's [response] property.
     */
    performAction(): void;
}
