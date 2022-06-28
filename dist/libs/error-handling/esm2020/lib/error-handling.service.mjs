import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ConfigurationService, ErrorHandlingConfig } from '@buildmotion/configuration';
import { LoggingService, Severity } from '@buildmotion/logging';
import { noop } from 'rxjs';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
import * as i2 from "@buildmotion/logging";
export class ErrorHandlingService extends ErrorHandler {
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
                const formattedError = `Error: ${error.name}; Message: ${error.message}; Stack: ${error.stack ?? 'Stack trace not available.'}`;
                this.loggingService.log(this.config.applicationName, Severity.Error, `${formattedError}`);
            }
        }
    }
}
ErrorHandlingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ErrorHandlingService, deps: [{ token: i1.ConfigurationService }, { token: i2.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ErrorHandlingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ErrorHandlingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.LoggingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvZXJyb3ItaGFuZGxpbmcvc3JjL2xpYi9lcnJvci1oYW5kbGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBa0IsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3RDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZO0lBS3BELFlBQW9CLGFBQW1DLEVBQVUsY0FBOEI7UUFDN0YsS0FBSyxFQUFFLENBQUM7UUFEVSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKL0YsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUVyQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUtsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osZUFBZSxFQUFFLFNBQVM7WUFDMUIsMkJBQTJCLEVBQUUsSUFBSTtTQUNsQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBd0I7UUFDckMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLG1CQUFtQixFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRXhCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsMERBQTBELENBQUMsQ0FBQztTQUN4STtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNNLFdBQVcsQ0FBQyxLQUFnQztRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUU7WUFDM0MsaUZBQWlGO1lBQ2pGLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsNkJBQTZCO1lBQzdCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUN0QyxJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUNyQyx1RUFBdUU7b0JBQ3ZFLE1BQU0sY0FBYyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2lCQUMzRjtxQkFBTTtvQkFDTCw4RUFBOEU7b0JBQzlFOzs7O3VCQUlHO29CQUNILElBQUksRUFBRSxDQUFDO2lCQUNSO2FBQ0Y7aUJBQU07Z0JBQ0wsNkRBQTZEO2dCQUM3RCxNQUFNLGNBQWMsR0FBRyxVQUFVLEtBQUssQ0FBQyxJQUFJLGNBQWMsS0FBSyxDQUFDLE9BQU8sWUFBWSxLQUFLLENBQUMsS0FBSyxJQUFJLDRCQUE0QixFQUFFLENBQUM7Z0JBQ2hJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQzNGO1NBQ0Y7SUFDSCxDQUFDOztpSEFsRVUsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBFcnJvckhhbmRsaW5nQ29uZmlnLCBJQ29uZmlndXJhdGlvbiB9IGZyb20gJ0BidWlsZG1vdGlvbi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlLCBTZXZlcml0eSB9IGZyb20gJ0BidWlsZG1vdGlvbi9sb2dnaW5nJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsaW5nU2VydmljZSBleHRlbmRzIEVycm9ySGFuZGxlciB7XG4gIHNlcnZpY2VOYW1lID0gJ0Vycm9ySGFuZGxpbmdTZXJ2aWNlJztcbiAgY29uZmlnITogRXJyb3JIYW5kbGluZ0NvbmZpZztcbiAgaGFzU2V0dGluZ3MgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIGxvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gVXNlIHRvIHByb3ZpZGUgZGVmYXVsdCBzZXR0aW5ncyBmb3IgZXJyb3IgaGFuZGxpbmcgcHJvY2Vzc2luZy5cbiAgICB0aGlzLmNvbmZpZyA9IG5ldyBFcnJvckhhbmRsaW5nQ29uZmlnKCk7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBhcHBsaWNhdGlvbk5hbWU6ICdBbmd1bGFyJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0RXJyb3JIYW5kbGluZzogdHJ1ZSxcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmFwcGxpY2F0aW9uTmFtZSA9ICdFcnJvckhhbmRsZXJTZXJ2aWNlJztcbiAgICB0aGlzLmNvbmZpZy5pbmNsdWRlRGVmYXVsdEVycm9ySGFuZGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChzZXR0aW5ncykgPT4gdGhpcy5oYW5kbGVTZXR0aW5ncyhzZXR0aW5ncykpO1xuICB9XG5cbiAgaGFuZGxlU2V0dGluZ3Moc2V0dGluZ3M6IElDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKHNldHRpbmdzICYmIHNldHRpbmdzLmVycm9ySGFuZGxpbmdDb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ3MuZXJyb3JIYW5kbGluZ0NvbmZpZztcbiAgICAgIHRoaXMuaGFzU2V0dGluZ3MgPSB0cnVlO1xuXG4gICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLmNvbmZpZy5hcHBsaWNhdGlvbk5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgQXBwbGljYXRpb24gW0Vycm9ySGFuZGxlcl0gdXNpbmcgY29uZmlndXJhdGlvbiBzZXR0aW5ncy5gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGhhbmRsZSBnZW5lcmFsaXplZCBbRXJyb3JdIGl0ZW1zIG9yIGVycm9ycyBmcm9tIEhUVFAvV2ViXG4gICAqIEFQSXMgW0h0dHBFcnJvclJlc3BvbnNlXS5cbiAgICpcbiAgICogQHBhcmFtIGVycm9yXG4gICAqL1xuICBvdmVycmlkZSBoYW5kbGVFcnJvcihlcnJvcjogRXJyb3IgfCBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5pbmNsdWRlRGVmYXVsdEVycm9ySGFuZGxpbmcpIHtcbiAgICAgIC8vIHVzZSB0aGUgW3N1cGVyXSBjYWxsIHRvIGtlZXAgZGVmYXVsdCBlcnJvciBoYW5kbGluZyBmdW5jdGlvbmFsaXR5IC0tPiBjb25zb2xlO1xuICAgICAgc3VwZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1NldHRpbmdzKSB7XG4gICAgICAvLyBBLiBIQU5ETEUgRVJST1JTIEZST00gSFRUUFxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgICAgIC8vIEEuMTogQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkRXJyb3IgPSBgJHtlcnJvci5uYW1lfTsgJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb25maWcuYXBwbGljYXRpb25OYW1lLCBTZXZlcml0eS5FcnJvciwgYCR7Zm9ybWF0dGVkRXJyb3J9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQS4yOiBUaGUgQVBJIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSAoaS5lLiwgNDAwLCA0MDEsIDQwMywgZXRjLikuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIFtIdHRwU2VydmljZV0gc2hvdWxkIHJldHVybiBhIHJlc3BvbnNlIHRoYXQgaXMgY29uc3VtYWJsZSBieSB0aGUgY2FsbGVyXG4gICAgICAgICAgICogb2YgdGhlIEFQSS4gVGhlIHJlc3BvbnNlIHNob3VsZCBpbmNsdWRlIHJlbGV2YW50IGluZm9ybWF0aW9uIGFuZCBlcnJvciBtZXNzYWdlc1xuICAgICAgICAgICAqIGluIGEgZm9ybWF0IHRoYXQgaXMga25vd24gYW5kIGNvbnN1bWFibGUgYnkgdGhlIGNhbGxlciBvZiB0aGUgQVBJLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG5vb3AoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQi4gSEFORExFIEEgR0VORVJBTElaRUQgRVJST1IgRlJPTSBUSEUgQVBQTElDQVRJT04vQ0xJRU5UO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRFcnJvciA9IGBFcnJvcjogJHtlcnJvci5uYW1lfTsgTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfTsgU3RhY2s6ICR7ZXJyb3Iuc3RhY2sgPz8gJ1N0YWNrIHRyYWNlIG5vdCBhdmFpbGFibGUuJ31gO1xuICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLmNvbmZpZy5hcHBsaWNhdGlvbk5hbWUsIFNldmVyaXR5LkVycm9yLCBgJHtmb3JtYXR0ZWRFcnJvcn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==