import { ReplaySubject } from 'rxjs';
import { AppConfigMock } from './app-config.mock';
import { Injectable, Optional } from '@angular/core';
import { ConfigurationContext } from '../configuration-context';
import * as i0 from "@angular/core";
import * as i1 from "../configuration-context";
export class ConfigurationServiceMock {
    constructor(context) {
        this.settingsSubject = new ReplaySubject(1);
        this.settings$ = this.settingsSubject.asObservable();
        this.config = AppConfigMock;
        if (context) {
            this.settingsSubject.next(context.config);
        }
    }
    set settings(value) {
        this.config = value;
        if (this.config) {
            this.settingsSubject.next(this.config);
        }
    }
    get settings() {
        return this.config;
    }
}
ConfigurationServiceMock.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationServiceMock, deps: [{ token: i1.ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationServiceMock.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationServiceMock });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationServiceMock, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationContext, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=configuration.service.mock.js.map