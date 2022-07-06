import { ConfigurationService, IConfiguration, IDataDogConfig } from '@buildmotion/configuration';
import { ILogEntry } from '../i-log-entry';
import { LoggingService } from '../logging.service';
import { LogWriter } from './log-writer';
import * as i0 from "@angular/core";
export declare class DataDogWriterService extends LogWriter {
    private configService;
    private loggingService;
    config: IDataDogConfig | undefined;
    constructor(configService: ConfigurationService, loggingService: LoggingService);
    handleLogEntry(entry: ILogEntry): void;
    handleSettings(settings: IConfiguration): void;
    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    setup(): void;
    /**
     * Use to implement the actual write of the [Log Entry].
     */
    write(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataDogWriterService, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataDogWriterService>;
}
