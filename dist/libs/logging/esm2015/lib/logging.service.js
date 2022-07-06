import { Injectable, Optional } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import { Guid } from 'guid-typescript';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LogEntry } from './log-entry';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
export class LoggingService {
    /**
     * The [LoggingService] constructor.
     */
    constructor(configService) {
        this.configService = configService;
        this.serviceName = 'LoggingService';
        this.timestamp = new Date();
        this.id = Guid.create();
        this.logEntriesSubject = new ReplaySubject(1);
        this.logEntries$ = this.logEntriesSubject.asObservable();
        this.log(this.serviceName, Severity.Information, `Starting logging service [${this.id.toString()}] at: ${this.timestamp}`);
        this.initializeService(configService);
    }
    /**
     * Use to initialize the logging service. Retrieves
     * application configuration settings.
     *
     * @param configService contains the configuration settings for the application
     */
    initializeService(configService) {
        if (configService) {
            this.configService.settings$.pipe(take(1)).subscribe((settings) => this.handleSettings(settings));
        }
    }
    /**
     * Use to handle settings from the configuration service.
     * @param settings
     */
    handleSettings(settings) {
        if (settings) {
            this.config = settings.loggingConfig;
            this.applicationName = this.config && this.config.applicationName ? this.config.applicationName : 'Angular';
            this.isProduction = this.config && this.config.isProduction ? this.config.isProduction : false;
        }
    }
    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     *
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     *
     * @param source
     * @param severity
     * @param message
     */
    log(source, severity, message, tags) {
        this.source = this.applicationName !== source ? `${this.applicationName}.${source}` : this.applicationName;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        if (tags) {
            tags.push(`LoggerId:${this.id.toString()}`);
        }
        else {
            tags = [`LoggerId:${this.id.toString()}`];
        }
        const logEntry = new LogEntry(this.applicationName, this.source, this.severity, this.message, tags);
        this.logEntriesSubject.next(logEntry);
    }
}
LoggingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingService, deps: [{ token: i1.ConfigurationService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LoggingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoggingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=logging.service.js.map