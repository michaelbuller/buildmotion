import { Injectable, Optional } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import { LoggingService } from '../logging.service';
import { LogWriter } from './log-writer';
import { datadogLogs } from '@datadog/browser-logs';
import { Severity } from '../severity.enum';
import { datadogRum } from '@datadog/browser-rum';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
import * as i2 from "../logging.service";
export class DataDogWriterService extends LogWriter {
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
DataDogWriterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DataDogWriterService, deps: [{ token: i1.ConfigurationService, optional: true }, { token: i2.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
DataDogWriterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DataDogWriterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DataDogWriterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService, decorators: [{
                    type: Optional
                }] }, { type: i2.LoggingService }]; } });
//# sourceMappingURL=data-dog-writer.service.js.map