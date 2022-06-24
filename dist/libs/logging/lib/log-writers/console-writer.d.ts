import { ILogEntry } from '../i-log-entry';
import { LogWriter } from './log-writer';
import { LoggingService } from '../logging.service';
import * as i0 from "@angular/core";
/**
 * Use this writer to log information to the browser console.
 */
export declare class ConsoleWriter extends LogWriter {
    private loggingService;
    constructor(loggingService: LoggingService);
    handleLogEntry(logEntry: ILogEntry): void;
    /**
     * No setup required for the console writer.
     */
    setup(): void;
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    write(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsoleWriter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConsoleWriter>;
}
