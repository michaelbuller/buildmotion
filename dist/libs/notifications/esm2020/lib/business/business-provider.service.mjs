import { Injectable } from '@angular/core';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { ValidateApiResponseAction } from './actions/validate-api-response-action';
import { ValidateNotificationAction } from './actions/validate-notification-action';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/logging";
import * as i2 from "@buildmotion/foundation";
export class BusinessProviderService extends ServiceBase {
    constructor(logger, serviceContext) {
        super('NotificationService.BusinessProviderService', logger, serviceContext);
    }
    /**
     * Use to execute one or more actions to process the business operation.
     * @param message a message to display form information to a user.
     */
    validateNotification(message) {
        const action = new ValidateNotificationAction(message);
        return action.Do({ ...this });
    }
    validateApiResponse(apiResponse) {
        const action = new ValidateApiResponseAction(apiResponse);
        return action.Do({ ...this });
    }
}
BusinessProviderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, deps: [{ token: i1.LoggingService }, { token: i2.ServiceContext }], target: i0.ɵɵFactoryTarget.Injectable });
BusinessProviderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BusinessProviderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.LoggingService }, { type: i2.ServiceContext }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbm90aWZpY2F0aW9ucy9zcmMvbGliL2J1c2luZXNzL2J1c2luZXNzLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQUtwRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsV0FBVztJQUN0RCxZQUFZLE1BQXNCLEVBQUUsY0FBOEI7UUFDaEUsS0FBSyxDQUFDLDZDQUE2QyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0JBQW9CLENBQXlCLE9BQXFCO1FBQ2hFLE1BQU0sTUFBTSxHQUFHLElBQUksMEJBQTBCLENBQUksT0FBTyxDQUFDLENBQUM7UUFDMUQsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBbUIsQ0FBeUIsV0FBMkI7UUFDckUsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBeUIsQ0FBSSxXQUFXLENBQUMsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7b0hBakJVLHVCQUF1Qjt3SEFBdkIsdUJBQXVCLGNBRnRCLE1BQU07MkZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVJlc3BvbnNlIH0gZnJvbSAnQGJ1aWxkbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgU2VydmljZUJhc2UsIFNlcnZpY2VDb250ZXh0IH0gZnJvbSAnQGJ1aWxkbW90aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vbG9nZ2luZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlQXBpUmVzcG9uc2VBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvdmFsaWRhdGUtYXBpLXJlc3BvbnNlLWFjdGlvbic7XG5pbXBvcnQgeyBWYWxpZGF0ZU5vdGlmaWNhdGlvbkFjdGlvbiB9IGZyb20gJy4vYWN0aW9ucy92YWxpZGF0ZS1ub3RpZmljYXRpb24tYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUHJvdmlkZXJTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dpbmdTZXJ2aWNlLCBzZXJ2aWNlQ29udGV4dDogU2VydmljZUNvbnRleHQpIHtcbiAgICBzdXBlcignTm90aWZpY2F0aW9uU2VydmljZS5CdXNpbmVzc1Byb3ZpZGVyU2VydmljZScsIGxvZ2dlciwgc2VydmljZUNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBleGVjdXRlIG9uZSBvciBtb3JlIGFjdGlvbnMgdG8gcHJvY2VzcyB0aGUgYnVzaW5lc3Mgb3BlcmF0aW9uLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBhIG1lc3NhZ2UgdG8gZGlzcGxheSBmb3JtIGluZm9ybWF0aW9uIHRvIGEgdXNlci5cbiAgICovXG4gIHZhbGlkYXRlTm90aWZpY2F0aW9uPFQgZXh0ZW5kcyBOb3RpZmljYXRpb24+KG1lc3NhZ2U6IE5vdGlmaWNhdGlvbik6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCBhY3Rpb24gPSBuZXcgVmFsaWRhdGVOb3RpZmljYXRpb25BY3Rpb248VD4obWVzc2FnZSk7XG4gICAgcmV0dXJuIGFjdGlvbi5Ebyh7IC4uLnRoaXMgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUFwaVJlc3BvbnNlPFQgZXh0ZW5kcyBOb3RpZmljYXRpb24+KGFwaVJlc3BvbnNlOiBBcGlSZXNwb25zZTxUPik6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCBhY3Rpb24gPSBuZXcgVmFsaWRhdGVBcGlSZXNwb25zZUFjdGlvbjxUPihhcGlSZXNwb25zZSk7XG4gICAgcmV0dXJuIGFjdGlvbi5Ebyh7IC4uLnRoaXMgfSk7XG4gIH1cbn1cbiJdfQ==