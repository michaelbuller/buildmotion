import { ConfigurationService, IConfiguration, LoggingConfig } from '@buildmotion/configuration';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { ILogEntry } from './i-log-entry';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
export interface ILoggingService {
    serviceName: string;
    source: string;
    severity: Severity;
    message: string;
    timestamp: Date;
    applicationName: string;
    version: string;
    isProduction: boolean;
    config: LoggingConfig;
    id: Guid;
    logEntries$: Observable<ILogEntry>;
    handleSettings(settings: IConfiguration): void;
    log(source: string, severity: Severity, message: string, tags?: string[]): void;
}
export declare class LoggingService implements ILoggingService {
    configService: ConfigurationService;
    serviceName: string;
    source: string;
    severity: Severity;
    message: string;
    timestamp: Date;
    applicationName: string;
    version: string;
    isProduction: boolean;
    config: LoggingConfig;
    id: Guid;
    private logEntriesSubject;
    readonly logEntries$: Observable<ILogEntry>;
    /**
     * The [LoggingService] constructor.
     */
    constructor(configService: ConfigurationService);
    /**
     * Use to initialize the logging service. Retrieves
     * application configuration settings.
     *
     * @param configService contains the configuration settings for the application
     */
    private initializeService;
    /**
     * Use to handle settings from the configuration service.
     * @param settings
     */
    handleSettings(settings: IConfiguration): void;
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
    log(source: string, severity: Severity, message: string, tags?: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggingService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggingService>;
}
