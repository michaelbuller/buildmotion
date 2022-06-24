import { MessageType } from './MessageType';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
export class ServiceContext {
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
ServiceContext.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ServiceContext, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ServiceContext.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ServiceContext, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ServiceContext, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=ServiceContext.js.map