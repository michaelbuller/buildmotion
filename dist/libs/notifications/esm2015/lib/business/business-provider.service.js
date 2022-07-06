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
        return action.Do(Object.assign({}, this));
    }
    validateApiResponse(apiResponse) {
        const action = new ValidateApiResponseAction(apiResponse);
        return action.Do(Object.assign({}, this));
    }
}
BusinessProviderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessProviderService, deps: [{ token: i1.LoggingService }, { token: i2.ServiceContext }], target: i0.ɵɵFactoryTarget.Injectable });
BusinessProviderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessProviderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessProviderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.LoggingService }, { type: i2.ServiceContext }]; } });
//# sourceMappingURL=business-provider.service.js.map