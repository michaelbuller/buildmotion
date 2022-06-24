import { IConfiguration, ILoggingConfig, LoggingConfig } from '@buildmotion/configuration';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { ILogEntry } from './i-log-entry';
import { ILoggingService } from './logging.service';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
export declare class LoggingServiceMock implements ILoggingService {
    applicationName: string;
    config: LoggingConfig;
    configService: undefined;
    handleSettings: () => {
        unknown: any;
    };
    id: Guid;
    isProduction: boolean;
    logEntries$: Subject<ILogEntry>;
    loggingConfig: ILoggingConfig;
    message: string;
    serviceName: string;
    severity: Severity;
    source: string;
    stack: string;
    timestamp: Date;
    version: string;
    setupConfiguration(settings: IConfiguration): void;
    log(source: string, severity: Severity, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggingServiceMock, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggingServiceMock>;
}
