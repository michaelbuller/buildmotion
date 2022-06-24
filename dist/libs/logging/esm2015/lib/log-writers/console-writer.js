import { Injectable } from '@angular/core';
import { LogWriter } from './log-writer';
import { LoggingService } from '../logging.service';
import { Severity } from '../severity.enum';
import { noop } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../logging.service";
/**
 * Use this writer to log information to the browser console.
 */
export class ConsoleWriter extends LogWriter {
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
ConsoleWriter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConsoleWriter, deps: [{ token: i1.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
ConsoleWriter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConsoleWriter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConsoleWriter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoggingService }]; } });
//# sourceMappingURL=console-writer.js.map