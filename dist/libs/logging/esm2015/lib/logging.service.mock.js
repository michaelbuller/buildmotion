import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
export class LoggingServiceMock {
    constructor() {
        this.applicationName = 'application';
        this.id = Guid.create();
        this.logEntries$ = new Subject();
        this.serviceName = 'LoggingServiceMock';
        this.version = '0.0.0';
    }
    setupConfiguration(settings) {
        if (settings) {
            this.log(this.serviceName, Severity.Information, `Logging for [${settings.loggingConfig.applicationName}].`);
        }
        this.isProduction = false;
    }
    log(source, severity, message) {
        this.source = source;
        this.severity = severity;
        this.message = message;
    }
}
LoggingServiceMock.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingServiceMock, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoggingServiceMock.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingServiceMock });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingServiceMock, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=logging.service.mock.js.map