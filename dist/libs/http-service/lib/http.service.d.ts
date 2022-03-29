import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpRequestMethod } from './http-request-methods.enum';
import { HttpRequestOptions } from './http-request-options';
import { LoggingService } from '@buildmotion/logging';
import { ConfigurationService } from '@buildmotion/configuration';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HttpService extends ServiceBase {
    private httpClient;
    private configService;
    private csrfToken;
    constructor(httpClient: HttpClient, loggingService: LoggingService, serviceContext: ServiceContext, configService: ConfigurationService);
    /**
     * Use to create [options] for the API request.
     * @param method Use to indicate the HttpRequest verb to target.
     * @param headers Use to provide any [HttpHeaders] with the request.
     * @param url Use to indicate the target URL for the API request.
     * @param body Use to provide a JSON object with the payload for the request.
     * @param withCredentials Use to indicate if request will include credentials (cookies), default value is [false].
     */
    createOptions(method: HttpRequestMethod, headers: HttpHeaders | null, url: string, body: any, params: any, withCredentials?: boolean): HttpRequestOptions;
    /**
     * Use to create a new [HttpHeaders] object for the HTTP/API request.
     * @param includeCsrf Include CSRF header
     * @returns
     */
    createHeader(includeCsrf?: boolean): HttpHeaders;
    /**
     * Use to execute an HTTP request using the specified options in the [HttpRequestOptions].
     * @param requestOptions
     */
    execute<T>(requestOptions: HttpRequestOptions): any;
    executeObserveBody<T>(requestOptions: HttpRequestOptions): Observable<T>;
    /**
     * Get CSRF token
     * @returns Observable
     */
    getCsrfToken(): any;
    /**
     * Handle Request to get CSRF Token
     * @param response
     */
    private handleCsrfResponse;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpService>;
}
