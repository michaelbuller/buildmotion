/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestMethod } from './http-request-methods.enum';
import { HttpRequestOptions } from './http-request-options';
import { LoggingService, Severity } from '@buildmotion/logging';
import { ConfigurationService } from '@buildmotion/configuration';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@buildmotion/logging";
import * as i3 from "@buildmotion/foundation";
import * as i4 from "@buildmotion/configuration";
export class HttpService extends ServiceBase {
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
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.LoggingService }, { token: i3.ServiceContext }, { token: i4.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LoggingService }, { type: i3.ServiceContext }, { type: i4.ConfigurationService }]; } });
//# sourceMappingURL=http.service.js.map