import { Injectable, Optional } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
import * as i1 from "./configuration-context";
export class ConfigurationService {
    constructor(context) {
        this.settingsSubject = new ReplaySubject(1);
        this.settings$ = this.settingsSubject.asObservable();
        if (context) {
            this.settingsSubject.next(context.config);
        }
    }
    set settings(value) {
        this.config = value;
        this.settingsSubject.next(this.config);
    }
    get settings() {
        return this.config;
    }
}
ConfigurationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationService, deps: [{ token: i1.ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationContext, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=configuration.service.js.map