import * as i0 from '@angular/core';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import * as i1 from '@buildmotion/configuration';
import { ErrorHandlingConfig } from '@buildmotion/configuration';
import * as i2 from '@buildmotion/logging';
import { Severity } from '@buildmotion/logging';
import { noop } from 'rxjs';
import { take } from 'rxjs/operators';

class ErrorHandlingModule {
}
ErrorHandlingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ErrorHandlingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingModule, imports: [CommonModule] });
ErrorHandlingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class ErrorHandlingService extends ErrorHandler {
    constructor(configService, loggingService) {
        super();
        this.configService = configService;
        this.loggingService = loggingService;
        this.serviceName = 'ErrorHandlingService';
        this.hasSettings = false;
        this.init();
    }
    init() {
        // Use to provide default settings for error handling processing.
        this.config = new ErrorHandlingConfig();
        this.config = {
            applicationName: 'Angular',
            includeDefaultErrorHandling: true,
        };
        this.config.applicationName = 'ErrorHandlerService';
        this.config.includeDefaultErrorHandling = false;
        this.configService.settings$.pipe(take(1)).subscribe((settings) => this.handleSettings(settings));
    }
    handleSettings(settings) {
        if (settings && settings.errorHandlingConfig) {
            this.config = settings.errorHandlingConfig;
            this.hasSettings = true;
            this.loggingService.log(this.config.applicationName, Severity.Information, `Application [ErrorHandler] using configuration settings.`);
        }
    }
    /**
     * Use to handle generalized [Error] items or errors from HTTP/Web
     * APIs [HttpErrorResponse].
     *
     * @param error
     */
    handleError(error) {
        var _a;
        if (this.config.includeDefaultErrorHandling) {
            // use the [super] call to keep default error handling functionality --> console;
            super.handleError(error);
        }
        if (this.hasSettings) {
            // A. HANDLE ERRORS FROM HTTP
            if (error instanceof HttpErrorResponse) {
                if (error.error instanceof ErrorEvent) {
                    // A.1: A client-side or network error occurred. Handle it accordingly.
                    const formattedError = `${error.name}; ${error.message}`;
                    this.loggingService.log(this.config.applicationName, Severity.Error, `${formattedError}`);
                }
                else {
                    // A.2: The API returned an unsuccessful response (i.e., 400, 401, 403, etc.).
                    /**
                     * The [HttpService] should return a response that is consumable by the caller
                     * of the API. The response should include relevant information and error messages
                     * in a format that is known and consumable by the caller of the API.
                     */
                    noop();
                }
            }
            else {
                // B. HANDLE A GENERALIZED ERROR FROM THE APPLICATION/CLIENT;
                const formattedError = `Error: ${error.name}; Message: ${error.message}; Stack: ${(_a = error.stack) !== null && _a !== void 0 ? _a : 'Stack trace not available.'}`;
                this.loggingService.log(this.config.applicationName, Severity.Error, `${formattedError}`);
            }
        }
    }
}
ErrorHandlingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingService, deps: [{ token: i1.ConfigurationService }, { token: i2.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.LoggingService }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ErrorHandlingModule, ErrorHandlingService };
//# sourceMappingURL=buildmotion-error-handling.js.map
