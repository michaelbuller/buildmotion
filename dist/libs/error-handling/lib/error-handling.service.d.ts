import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { ConfigurationService, ErrorHandlingConfig, IConfiguration } from '@buildmotion/configuration';
import { LoggingService } from '@buildmotion/logging';
import * as i0 from "@angular/core";
export declare class ErrorHandlingService extends ErrorHandler {
    private configService;
    private loggingService;
    serviceName: string;
    config: ErrorHandlingConfig;
    hasSettings: boolean;
    constructor(configService: ConfigurationService, loggingService: LoggingService);
    init(): void;
    handleSettings(settings: IConfiguration): void;
    /**
     * Use to handle generalized [Error] items or errors from HTTP/Web
     * APIs [HttpErrorResponse].
     *
     * @param error
     */
    handleError(error: Error | HttpErrorResponse): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlingService>;
}
