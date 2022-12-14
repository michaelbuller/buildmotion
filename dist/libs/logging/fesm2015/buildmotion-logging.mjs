import * as i0 from '@angular/core';
import { Injectable, Optional, NgModule } from '@angular/core';
import { ValidationContext, IsTrue, IsNotNullOrUndefined, StringIsNotNullEmptyRange } from '@buildmotion/rules-engine';
import { noop, ReplaySubject, Subject } from 'rxjs';
import { Guid } from 'guid-typescript';
import { take } from 'rxjs/operators';
import * as i1 from '@buildmotion/configuration';
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { CommonModule } from '@angular/common';

class LogWriter {
    /**
     * Use this method to execute the write process for the
     * specified [Log Entry] item.
     *
     * Using the [template method] design pattern.
     */
    execute() {
        this.setup();
        if (this.validateEntry()) {
            this.write();
        }
        this.finish();
    }
    /**
     * Use to validate the [log entry] before attempting to write
     * using the specified [log writer].
     *
     * Returns a [false] boolean to indicate the item is not valid.
     */
    validateEntry() {
        const validationContext = new ValidationContext();
        validationContext.addRule(new IsTrue('LogWriterExists', 'The log writer is not configured.', this.hasWriter));
        validationContext.addRule(new IsNotNullOrUndefined('EntryIsNotNull', 'The entry cannot be null.', this.targetEntry));
        validationContext.addRule(new StringIsNotNullEmptyRange('SourceIsRequired', 'The entry source is not valid.', this.targetEntry.source, 1, 100));
        validationContext.addRule(new StringIsNotNullEmptyRange('MessageIsValid', 'The message is required for the [Log Entry].', this.targetEntry.message, 1, 2000));
        validationContext.addRule(new IsNotNullOrUndefined('TimestampIsRequired', 'The timestamp must be a valid DateTime value.', this.targetEntry.timestamp));
        return validationContext.renderRules().isValid;
    }
    /**
     * Use to finish the process or clean-up any resources.
     */
    finish() {
        noop();
    }
}

var Severity;
(function (Severity) {
    Severity["Information"] = "Information";
    Severity["Warning"] = "Warning";
    Severity["Error"] = "Error";
    Severity["Critical"] = "Critical";
    Severity["Debug"] = "Debug";
})(Severity || (Severity = {}));

class LogEntry {
    constructor(application, source, severity, message, tags) {
        this.application = application;
        this.source = source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date(Date.now());
        this.tags = tags;
    }
}

class LoggingService {
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
LoggingService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService, deps: [{ token: i1.ConfigurationService, optional: true }], target: i0.????FactoryTarget.Injectable });
LoggingService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: i1.ConfigurationService, decorators: [{
                        type: Optional
                    }] }];
    } });

/**
 * Use this writer to log information to the browser console.
 */
class ConsoleWriter extends LogWriter {
    constructor(loggingService) {
        super();
        this.loggingService = loggingService;
        if (loggingService.config.isProduction === false) {
            this.loggingService.logEntries$.subscribe((logEntry) => this.handleLogEntry(logEntry));
        }
    }
    handleLogEntry(logEntry) {
        this.targetEntry = logEntry;
        this.execute();
    }
    /**
     * No setup required for the console writer.
     */
    setup() {
        noop();
    }
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    write() {
        switch (this.targetEntry.severity) {
            /* eslint-disable no-restricted-syntax */
            /* eslint-disable no-console */
            case Severity.Debug:
                console.debug(this.targetEntry);
                break;
            case Severity.Information:
                console.info(this.targetEntry);
                break;
            case Severity.Warning:
                console.warn(this.targetEntry);
                break;
            case Severity.Error:
                console.error(this.targetEntry);
                break;
            case Severity.Critical:
                console.error(this.targetEntry);
                break;
            default:
                break;
            /* eslint-enable no-restricted-syntax */
            /* eslint-enable no-console */
        }
    }
}
ConsoleWriter.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter, deps: [{ token: LoggingService }], target: i0.????FactoryTarget.Injectable });
ConsoleWriter.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LoggingService }]; } });

class DataDogWriterService extends LogWriter {
    constructor(configService, loggingService) {
        super();
        this.configService = configService;
        this.loggingService = loggingService;
        if (this.configService && this.loggingService) {
            this.configService.settings$.subscribe((settings) => this.handleSettings(settings));
            this.loggingService.logEntries$.subscribe((entry) => this.handleLogEntry(entry));
        }
    }
    handleLogEntry(entry) {
        if (this.hasWriter) {
            this.targetEntry = entry;
            this.execute();
        }
    }
    handleSettings(settings) {
        if (settings) {
            this.config = settings.dataDogConfig;
            this.hasWriter = true;
            console.log(`Initializing [DataDog] writer for logging.`);
            /**
             * Use to initialize client-browser log transfer to DataDog;
             */
            datadogLogs.init({
                clientToken: this.config.logs.clientToken,
                site: this.config.logs.site,
                forwardErrorsToLogs: this.config.logs.forwardErrorsToLogs,
                sampleRate: this.config.logs.sampleRate
            });
            /**
             * Note: The trackInteractions initialization parameter enables the automatic collection of user
             * clicks in your application.Sensitive and private data contained on your pages may be included to
             * identify the elements interacted with.
             *
             * version: Specify a version number to identify the deployed version of your application in Datadog
             */
            datadogRum.init({
                applicationId: this.config.realUserMonitoring.applicationId,
                clientToken: this.config.realUserMonitoring.clientToken,
                site: this.config.realUserMonitoring.site,
                service: this.config.realUserMonitoring.service,
                env: this.config.realUserMonitoring.env,
                // Specify a version number to identify the deployed version of your application in Datadog
                version: this.config.realUserMonitoring.version,
                sampleRate: this.config.realUserMonitoring.sampleRate,
                trackInteractions: this.config.realUserMonitoring.trackInteractions
            });
        }
    }
    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    setup() {
        var _a, _b;
        if (this.hasWriter && this.config && this.targetEntry) {
            try {
                // FIXME: DO WE NEED TO SOMETHING HERE? Nope.
            }
            catch (error) {
                if (error && error instanceof Error) {
                    const message = `${this.targetEntry.application}.DataDogWriter: ${(_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : ''}, ${(_b = error === null || error === void 0 ? void 0 : error.stack) !== null && _b !== void 0 ? _b : error.stack}`;
                    console.error(message);
                }
            }
        }
    }
    /**
     * Use to implement the actual write of the [Log Entry].
     */
    write() {
        if (this.targetEntry) {
            switch (this.targetEntry.severity) {
                case Severity.Information:
                    datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
                    break;
                case Severity.Warning:
                    datadogLogs.logger.warn(this.targetEntry.application, Object.assign({}, this.targetEntry));
                    break;
                case Severity.Error:
                    datadogLogs.logger.error(this.targetEntry.application, Object.assign({}, this.targetEntry));
                    break;
                case Severity.Critical:
                    datadogLogs.logger.error(this.targetEntry.application, Object.assign({}, this.targetEntry));
                    break;
                case Severity.Debug:
                    datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
                    break;
                default:
                    datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
            }
        }
    }
}
DataDogWriterService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, deps: [{ token: i1.ConfigurationService, optional: true }, { token: LoggingService }], target: i0.????FactoryTarget.Injectable });
DataDogWriterService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, providedIn: 'root' });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.ConfigurationService, decorators: [{
                        type: Optional
                    }] }, { type: LoggingService }];
    } });

class LoggingModule {
}
LoggingModule.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingModule, deps: [], target: i0.????FactoryTarget.NgModule });
LoggingModule.??mod = i0.????ngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: LoggingModule, imports: [CommonModule] });
LoggingModule.??inj = i0.????ngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingModule, imports: [CommonModule] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class LoggingServiceConfig {
    constructor() {
        this.applicationName = 'APP_NAME_NOT_PROVIDED';
    }
}

class LoggingServiceMock {
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
LoggingServiceMock.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock, deps: [], target: i0.????FactoryTarget.Injectable });
LoggingServiceMock.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock, decorators: [{
            type: Injectable
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ConsoleWriter, DataDogWriterService, LogEntry, LogWriter, LoggingModule, LoggingService, LoggingServiceConfig, LoggingServiceMock, Severity };
//# sourceMappingURL=buildmotion-logging.mjs.map
