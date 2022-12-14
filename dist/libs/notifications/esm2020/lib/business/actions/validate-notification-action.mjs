import { ActionResult } from '@buildmotion/actions';
import { ApiResponse } from '@buildmotion/core';
import { IsNotNullOrUndefined, StringIsNotNullEmptyRange } from '@buildmotion/rules-engine';
import { of } from 'rxjs';
import { BusinessActionBase } from './business-action-base';
export class ValidateNotificationAction extends BusinessActionBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtbm90aWZpY2F0aW9uLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbm90aWZpY2F0aW9ucy9zcmMvbGliL2J1c2luZXNzL2FjdGlvbnMvdmFsaWRhdGUtbm90aWZpY2F0aW9uLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLDBCQUE4QixTQUFRLGtCQUFxQjtJQUl0RTs7T0FFRztJQUNILFlBQVksWUFBMEI7UUFDcEMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFOdEMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBT3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTSxpQkFBaUI7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQjthQUNuQixPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSwrQ0FBK0MsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3RKLE9BQU8sQ0FDTixJQUFJLHlCQUF5QixDQUMzQixxQkFBcUIsRUFDckIscUVBQXFFLEVBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN2QixDQUFDLEVBQ0QsRUFBRSxFQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FDeEIsQ0FDRjthQUNBLE9BQU8sQ0FDTixJQUFJLHlCQUF5QixDQUMzQiwyQkFBMkIsRUFDM0IsNEVBQTRFLEVBQzVFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUM3QixDQUFDLEVBQ0QsR0FBRyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FDeEIsQ0FDRjthQUNBLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFeEosSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FDNUIsSUFBSSx5QkFBeUIsQ0FBQyxnQkFBZ0IsRUFBRSxxRUFBcUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNySSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTSxhQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBWSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxXQUFXLEVBQUssQ0FBQztRQUMvQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ25DLGlCQUFpQixDQUFDLElBQUksR0FBTSxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tICdAYnVpbGRtb3Rpb24vYWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gJ0BidWlsZG1vdGlvbi9jb3JlJztcbmltcG9ydCB7IElzTm90TnVsbE9yVW5kZWZpbmVkLCBTdHJpbmdJc05vdE51bGxFbXB0eVJhbmdlIH0gZnJvbSAnQGJ1aWxkbW90aW9uL3J1bGVzLWVuZ2luZSc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCdXNpbmVzc0FjdGlvbkJhc2UgfSBmcm9tICcuL2J1c2luZXNzLWFjdGlvbi1iYXNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGVOb3RpZmljYXRpb25BY3Rpb248VD4gZXh0ZW5kcyBCdXNpbmVzc0FjdGlvbkJhc2U8VD4ge1xuICBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjtcbiAgZG9Ob3REaXNwbGF5VG9Vc2VyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gcHJvdmlkZSBhbnkgcmVxdWlyZWQgaW5wdXRzIGZvciB0aGUgYWN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Iobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pIHtcbiAgICBzdXBlcignVmFsaWRhdGVOb3RpZmljYXRpb25BY3Rpb24nKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBwaXBlbGluZSBtZXRob2QgYXMgYW4gb3Bwb3J0dW5pdHkgdG9cbiAgICogc2V0dXAgdGhlIGFjdGlvbiBmb3IgcHJvY2Vzc2luZywgdmFsaWRhdGluZyBidXNpbmVzcyBydWxlcywgYW5kL29yXG4gICAqIHBlcmZvcm1pbmcgb3RoZXIgZGF0YSB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBydW5zIGJlZm9yZSBbdmFsaWRhdGlvbkFjdGlvbl0gYW5kIFtwZXJmb3JtQWN0aW9uXS5cbiAgICovXG4gIG92ZXJyaWRlIHByZVZhbGlkYXRlQWN0aW9uKCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRleHRcbiAgICAgIC5hZGRSdWxlKG5ldyBJc05vdE51bGxPclVuZGVmaW5lZCgnRm9ybU1lc3NhZ2VJc05vdE51bGwnLCAnVGhlIGZvcm0gbWVzc2FnZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQuJywgdGhpcy5ub3RpZmljYXRpb24sIHRoaXMuZG9Ob3REaXNwbGF5VG9Vc2VyKSlcbiAgICAgIC5hZGRSdWxlKFxuICAgICAgICBuZXcgU3RyaW5nSXNOb3ROdWxsRW1wdHlSYW5nZShcbiAgICAgICAgICAnTWVzc2FnZVRpdGxlSXNWYWxpZCcsXG4gICAgICAgICAgJ1RoZSBtZXNzYWdlIHRpdGxlIGlzIG5vdCB2YWxpZC4gTXVzdCBiZSB3aXRoaW4gMiBhbmQgNDUgY2hhcmFjdGVycy4nLFxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnRpdGxlLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgdGhpcy5kb05vdERpc3BsYXlUb1VzZXJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLmFkZFJ1bGUoXG4gICAgICAgIG5ldyBTdHJpbmdJc05vdE51bGxFbXB0eVJhbmdlKFxuICAgICAgICAgICdNZXNzYWdlRGVzY3JpcHRpb25Jc1ZhbGlkJyxcbiAgICAgICAgICAnVGhlIG1lc3NhZ2UgZGVzY3JpcHRpb24gaXMgbm90IHZhbGlkLiBNdXN0IGJlIHdpdGhpbiAxIGFuZCAyMDAgY2hhcmFjdGVycy4nLFxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIHRoaXMuZG9Ob3REaXNwbGF5VG9Vc2VyXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5hZGRSdWxlKG5ldyBJc05vdE51bGxPclVuZGVmaW5lZCgnTm90aWZpZXJUeXBlSXNWYWxpZCcsICdUaGUgbm90aWZpZXIgdHlwZSBpcyBub3QgdmFsaWQuJywgdGhpcy5ub3RpZmljYXRpb24ubm90aWZpZXJUeXBlLCB0aGlzLmRvTm90RGlzcGxheVRvVXNlcikpO1xuXG4gICAgdGhpcy5ub3RpZmljYXRpb24ubWVzc2FnZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udGV4dC5hZGRSdWxlKFxuICAgICAgICBuZXcgU3RyaW5nSXNOb3ROdWxsRW1wdHlSYW5nZSgnTWVzc2FnZUlzVmFsaWQnLCAnVGhlIG1lc3NhZ2UgaXRlbSBpcyBub3QgdmFsaWQuIE11c3QgYmUgd2l0aGluIDIgYW5kIDEyNSBjaGFyYWN0ZXJzLicsIGl0ZW0sIDIsIDEyNSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIGltcGxlbWVudCB0aGUgYWN0aW9uJ3MgYnVzaW5lc3MgbG9naWMuIFRoaXNcbiAgICogbWV0aG9kIHdpbGwgZXhlY3V0ZSBpZiB0aGVyZSBhcmUgbm8gdmFsaWRhdGlvbiBvciBidXNpbmVzcyBydWxlIHZpb2xhdGlvbnMuXG4gICAqXG4gICAqIFdyYXBzIHRoZSByZXNwb25zZSBpbiBhbiBBcGlSZXNwb25zZSB0byByZXR1cm4gdGhlIHZhbHVlIHVzaW5nIHRoZSBhY3Rpb24ncyBbcmVzcG9uc2VdIHByb3BlcnR5LlxuICAgKi9cbiAgb3ZlcnJpZGUgcGVyZm9ybUFjdGlvbigpIHtcbiAgICB0aGlzLmFjdGlvblJlc3VsdCA9IEFjdGlvblJlc3VsdC5TdWNjZXNzO1xuICAgIGNvbnN0IGRhdGE6IHVua25vd24gPSB0aGlzLm5vdGlmaWNhdGlvbjtcbiAgICBjb25zdCBzdWNjZXNzQXBpTWVzc2FnZSA9IG5ldyBBcGlSZXNwb25zZTxUPigpO1xuICAgIHN1Y2Nlc3NBcGlNZXNzYWdlLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgc3VjY2Vzc0FwaU1lc3NhZ2UuZGF0YSA9IDxUPmRhdGE7XG5cbiAgICB0aGlzLnJlc3BvbnNlID0gb2Yoc3VjY2Vzc0FwaU1lc3NhZ2UpO1xuICB9XG59XG4iXX0=