import * as i0 from '@angular/core';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import * as i2 from '@buildmotion/logging';
import { Severity } from '@buildmotion/logging';
import * as i3 from '@buildmotion/foundation';
import { ServiceBase } from '@buildmotion/foundation';
import * as i4 from '@buildmotion/configuration';
import { ApiResponse, ApiMessage, ApiMessageType } from '@buildmotion/core';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import * as i1$1 from '@angular/router';
import { Guid } from 'guid-typescript';

class HttpServiceModule {
}
HttpServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HttpServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: HttpServiceModule, imports: [CommonModule] });
HttpServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpServiceModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

/**
 * Use to indicate the request method to use.
 */
var HttpRequestMethod;
(function (HttpRequestMethod) {
    HttpRequestMethod["get"] = "GET";
    HttpRequestMethod["post"] = "POST";
    HttpRequestMethod["put"] = "PUT";
    HttpRequestMethod["delete"] = "DELETE";
    HttpRequestMethod["options"] = "OPTIONS";
    HttpRequestMethod["head"] = "HEAD";
    HttpRequestMethod["patch"] = "PATCH";
})(HttpRequestMethod || (HttpRequestMethod = {}));

/**
 * Use to configure the HTTP options for a request.
 */
class HttpRequestOptions {
    constructor() {
        this.requestMethod = HttpRequestMethod.get;
        this.requestUrl = '';
    }
    toString() {
        return `Method: ${this.requestMethod}`;
    }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpService extends ServiceBase {
    constructor(httpClient, loggingService, serviceContext, configService) {
        super('HttpService', loggingService, serviceContext);
        this.httpClient = httpClient;
        this.configService = configService;
        this.csrfToken = '';
        if (configService.settings)
            this.getCsrfToken().subscribe((resp) => this.handleCsrfResponse(resp));
    }
    /**
     * Use to create [options] for the API request.
     * @param method Use to indicate the HttpRequest verb to target.
     * @param headers Use to provide any [HttpHeaders] with the request.
     * @param url Use to indicate the target URL for the API request.
     * @param body Use to provide a JSON object with the payload for the request.
     * @param withCredentials Use to indicate if request will include credentials (cookies), default value is [false].
     */
    createOptions(method, headers, url, body, params, withCredentials = false) {
        const options = new HttpRequestOptions();
        options.requestMethod = method;
        options.headers = headers || new HttpHeaders();
        options.requestUrl = url;
        options.body = body;
        options.params = params;
        options.withCredentials = withCredentials;
        return options;
    }
    /**
     * Use to create a new [HttpHeaders] object for the HTTP/API request.
     * @param includeCsrf Include CSRF header
     * @returns
     */
    createHeader(includeCsrf = false) {
        let headers = new HttpHeaders();
        headers = headers.set('content-type', 'application/json');
        if (includeCsrf) {
            headers = headers.set('x-csrf-token', this.csrfToken);
        }
        return headers;
    }
    /**
     * Use to execute an HTTP request using the specified options in the [HttpRequestOptions].
     * @param requestOptions
     */
    // execute<T>(requestOptions: HttpRequestOptions): Observable<HttpResponse<T>> {
    execute(requestOptions) {
        return this.httpClient.request(requestOptions.requestMethod.toString(), requestOptions.requestUrl, {
            body: requestOptions.body,
            headers: requestOptions.headers,
            reportProgress: requestOptions.reportProgress,
            observe: 'response',
            params: requestOptions.params,
            responseType: requestOptions.responseType,
            withCredentials: requestOptions.withCredentials,
        });
    }
    executeObserveBody(requestOptions) {
        return this.httpClient.request(requestOptions.requestMethod.toString(), requestOptions.requestUrl, {
            body: requestOptions.body,
            headers: requestOptions.headers,
            reportProgress: requestOptions.reportProgress,
            observe: 'body',
            params: requestOptions.params,
            responseType: requestOptions.responseType,
            withCredentials: requestOptions.withCredentials,
        });
    }
    /**
     * Get CSRF token
     * @returns Observable
     */
    getCsrfToken() {
        const requestUrl = this.configService.settings.apiConfig.csrf;
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to get CSRF token.`);
        const options = this.createOptions(HttpRequestMethod.get, null, requestUrl, null, null, false);
        return this.execute(options);
    }
    /**
     * Handle Request to get CSRF Token
     * @param response
     */
    handleCsrfResponse(response) {
        var _a;
        const requestName = `CSRF token request`;
        if (response) {
            const { body } = response;
            this.csrfToken = (_a = body === null || body === void 0 ? void 0 : body.data) === null || _a === void 0 ? void 0 : _a.token;
            this.loggingService.log(this.serviceName, Severity.Information, `Preparing to handle successful response for ${requestName}.`);
        }
        else {
            this.loggingService.log(this.serviceName, Severity.Warning, `Received unexpected null/undefined response for ${requestName}.`);
        }
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.LoggingService }, { token: i3.ServiceContext }, { token: i4.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LoggingService }, { type: i3.ServiceContext }, { type: i4.ConfigurationService }]; } });

/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpErrorInterceptor {
    constructor(router) {
        this.router = router;
        this.displayToUser = true;
        this.doNotDisplayToUser = false;
        return;
    }
    intercept(request, next) {
        return next.handle(request).pipe(retry(1), catchError((error) => {
            return this.handleError(error);
        }));
    }
    /**
     * Use to handle errors during HTTP/Web API operations. The caller expects
     * an Observable response - this method will either return the response from
     * the server or a new [ApiResponse] as an Observable for the client to
     * handle.
     *
     * @param error The error from the HTTP response.
     */
    handleError(error) {
        var _a;
        const apiErrorResponse = new ApiResponse();
        apiErrorResponse.isSuccess = false;
        apiErrorResponse.message = 'Unexpected HTTP error.';
        apiErrorResponse.timestamp = new Date();
        if (error.status === 401) {
            this.router.navigateByUrl('/auth/login');
        }
        // Use the base error object to determine if the error type is a general or an all-purpose error.
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            apiErrorResponse.messages.push(new ApiMessage(`HTTP_ERROR`, `A client-side or network error occurred.`, ApiMessageType.Error));
            return throwError(apiErrorResponse);
        }
        else {
            // The API returned an unsuccessful response (failure status code).
            if (error instanceof ApiResponse) {
                /**
                 * A known error response format from the API/Server; rethrow this response.
                 *
                 * Throwing the error sends the Observable to the subscriber of the response.
                 * The subscriber or consumer should handle the response and display of messages.
                 */
                return throwError(error);
            }
            else {
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.error_description) {
                    apiErrorResponse.message = error.error.error_description;
                }
                // An unhandled error/exception - may not want to display this information to an end-user.
                apiErrorResponse.messages.push(new ApiMessage(`HTTP_ERROR`, `${error.status}: ${error.statusText}. ${error.message}`, ApiMessageType.Error));
                return throwError(apiErrorResponse);
            }
        }
    }
}
HttpErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
HttpErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.Router }]; } });

/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpResponseInterceptor {
    constructor() {
        this.displayToUser = true;
        this.doNotDisplayToUser = false;
    }
    intercept(request, next) {
        return next.handle(request).pipe(map((event) => {
            if (event instanceof HttpResponse) {
                if (event.body && event.body.id && event.body.data) {
                    return event;
                }
                else {
                    // FIXME: WRAP API RESPONSE; REMOVE WHEN API RETURNS DATA IN PROPER FORMAT/SCHEMA;
                    const apiResponse = new ApiResponse();
                    apiResponse.data = event.body;
                    apiResponse.message = 'API response wrapped by [HttpResponseInterceptor].';
                    apiResponse.timestamp = new Date();
                    apiResponse.isSuccess = this.determineResponseStatus(event.status);
                    apiResponse.id = Guid.create().toString();
                    // return the new response/wrapped;
                    return event.clone({
                        body: apiResponse
                    });
                }
            }
            return event;
        }));
    }
    determineResponseStatus(status) {
        if (status === 200) {
            return true;
        }
        return false;
    }
}
HttpResponseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpResponseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor, decorators: [{
            type: Injectable
        }] });

/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpTokenInterceptor {
    constructor(configService) {
        this.configService = configService;
    }
    intercept(request, next) {
        const token = localStorage.getItem('r360-portal-token');
        const sysAccId = localStorage.getItem('r360-portal-sysAccId');
        if (request.url.includes(this.configService.config.apiConfig.apiURL) &&
            !request.url.endsWith('auth/token') &&
            token &&
            sysAccId) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                }
            });
        }
        return next.handle(request);
    }
}
HttpTokenInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpTokenInterceptor, deps: [{ token: i4.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpTokenInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpTokenInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpTokenInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i4.ConfigurationService }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { HttpErrorInterceptor, HttpRequestMethod, HttpRequestOptions, HttpResponseInterceptor, HttpService, HttpServiceModule, HttpTokenInterceptor };
//# sourceMappingURL=buildmotion-http-service.mjs.map
