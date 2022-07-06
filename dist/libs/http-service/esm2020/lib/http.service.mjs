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
        const requestName = `CSRF token request`;
        if (response) {
            const { body } = response;
            this.csrfToken = body?.data?.token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9odHRwLXNlcnZpY2Uvc3JjL2xpYi9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUl0RSxNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7SUFHMUMsWUFDVSxVQUFzQixFQUM5QixjQUE4QixFQUM5QixjQUE4QixFQUN0QixhQUFtQztRQUUzQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUw3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBR3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQU5yQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBU3JCLElBQUksYUFBYSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxhQUFhLENBQ1gsTUFBeUIsRUFD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QUN6QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDckIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsUUFBUSxDQUFDLFdBQVcsRUFDcEIsK0NBQStDLFdBQVcsR0FBRyxDQUM5RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNyQixJQUFJLENBQUMsV0FBVyxFQUNoQixRQUFRLENBQUMsT0FBTyxFQUNoQixtREFBbUQsV0FBVyxHQUFHLENBQ2xFLENBQUM7U0FDSDtJQUNILENBQUM7O3dHQXRIVSxXQUFXOzRHQUFYLFdBQVcsY0FERSxNQUFNOzJGQUNuQixXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1ldGhvZCB9IGZyb20gJy4vaHR0cC1yZXF1ZXN0LW1ldGhvZHMuZW51bSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL2h0dHAtcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlLCBTZXZlcml0eSB9IGZyb20gJ0BidWlsZG1vdGlvbi9sb2dnaW5nJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGJ1aWxkbW90aW9uL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgU2VydmljZUJhc2UsIFNlcnZpY2VDb250ZXh0IH0gZnJvbSAnQGJ1aWxkbW90aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICBwcml2YXRlIGNzcmZUb2tlbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsXG4gICAgc2VydmljZUNvbnRleHQ6IFNlcnZpY2VDb250ZXh0LFxuICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoJ0h0dHBTZXJ2aWNlJywgbG9nZ2luZ1NlcnZpY2UsIHNlcnZpY2VDb250ZXh0KTtcbiAgICBpZiAoY29uZmlnU2VydmljZS5zZXR0aW5ncykgdGhpcy5nZXRDc3JmVG9rZW4oKS5zdWJzY3JpYmUoKHJlc3A6IEFwaVJlc3BvbnNlPGFueT4pID0+IHRoaXMuaGFuZGxlQ3NyZlJlc3BvbnNlKHJlc3ApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gY3JlYXRlIFtvcHRpb25zXSBmb3IgdGhlIEFQSSByZXF1ZXN0LlxuICAgKiBAcGFyYW0gbWV0aG9kIFVzZSB0byBpbmRpY2F0ZSB0aGUgSHR0cFJlcXVlc3QgdmVyYiB0byB0YXJnZXQuXG4gICAqIEBwYXJhbSBoZWFkZXJzIFVzZSB0byBwcm92aWRlIGFueSBbSHR0cEhlYWRlcnNdIHdpdGggdGhlIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB1cmwgVXNlIHRvIGluZGljYXRlIHRoZSB0YXJnZXQgVVJMIGZvciB0aGUgQVBJIHJlcXVlc3QuXG4gICAqIEBwYXJhbSBib2R5IFVzZSB0byBwcm92aWRlIGEgSlNPTiBvYmplY3Qgd2l0aCB0aGUgcGF5bG9hZCBmb3IgdGhlIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB3aXRoQ3JlZGVudGlhbHMgVXNlIHRvIGluZGljYXRlIGlmIHJlcXVlc3Qgd2lsbCBpbmNsdWRlIGNyZWRlbnRpYWxzIChjb29raWVzKSwgZGVmYXVsdCB2YWx1ZSBpcyBbZmFsc2VdLlxuICAgKi9cbiAgY3JlYXRlT3B0aW9ucyhcbiAgICBtZXRob2Q6IEh0dHBSZXF1ZXN0TWV0aG9kLFxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzIHwgbnVsbCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgd2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgKTogSHR0cFJlcXVlc3RPcHRpb25zIHtcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IEh0dHBSZXF1ZXN0T3B0aW9ucygpO1xuICAgIG9wdGlvbnMucmVxdWVzdE1ldGhvZCA9IG1ldGhvZDtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzIHx8IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIG9wdGlvbnMucmVxdWVzdFVybCA9IHVybDtcbiAgICBvcHRpb25zLmJvZHkgPSBib2R5O1xuICAgIG9wdGlvbnMucGFyYW1zID0gcGFyYW1zO1xuICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBjcmVhdGUgYSBuZXcgW0h0dHBIZWFkZXJzXSBvYmplY3QgZm9yIHRoZSBIVFRQL0FQSSByZXF1ZXN0LlxuICAgKiBAcGFyYW0gaW5jbHVkZUNzcmYgSW5jbHVkZSBDU1JGIGhlYWRlclxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY3JlYXRlSGVhZGVyKGluY2x1ZGVDc3JmID0gZmFsc2UpOiBIdHRwSGVhZGVycyB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBpZiAoaW5jbHVkZUNzcmYpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgneC1jc3JmLXRva2VuJywgdGhpcy5jc3JmVG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBleGVjdXRlIGFuIEhUVFAgcmVxdWVzdCB1c2luZyB0aGUgc3BlY2lmaWVkIG9wdGlvbnMgaW4gdGhlIFtIdHRwUmVxdWVzdE9wdGlvbnNdLlxuICAgKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnNcbiAgICovXG4gIC8vIGV4ZWN1dGU8VD4ocmVxdWVzdE9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gIGV4ZWN1dGU8VD4ocmVxdWVzdE9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0PFQ+KHJlcXVlc3RPcHRpb25zLnJlcXVlc3RNZXRob2QudG9TdHJpbmcoKSwgcmVxdWVzdE9wdGlvbnMucmVxdWVzdFVybCwge1xuICAgICAgYm9keTogcmVxdWVzdE9wdGlvbnMuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMsXG4gICAgICByZXBvcnRQcm9ncmVzczogcmVxdWVzdE9wdGlvbnMucmVwb3J0UHJvZ3Jlc3MsXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgICByZXNwb25zZVR5cGU6IHJlcXVlc3RPcHRpb25zLnJlc3BvbnNlVHlwZSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogcmVxdWVzdE9wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxuICAgIH0pO1xuICB9XG5cbiAgZXhlY3V0ZU9ic2VydmVCb2R5PFQ+KHJlcXVlc3RPcHRpb25zOiBIdHRwUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8VD4ocmVxdWVzdE9wdGlvbnMucmVxdWVzdE1ldGhvZC50b1N0cmluZygpLCByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0VXJsLCB7XG4gICAgICBib2R5OiByZXF1ZXN0T3B0aW9ucy5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxdWVzdE9wdGlvbnMuaGVhZGVycyxcbiAgICAgIHJlcG9ydFByb2dyZXNzOiByZXF1ZXN0T3B0aW9ucy5yZXBvcnRQcm9ncmVzcyxcbiAgICAgIG9ic2VydmU6ICdib2R5JyxcbiAgICAgIHBhcmFtczogcmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgICAgcmVzcG9uc2VUeXBlOiByZXF1ZXN0T3B0aW9ucy5yZXNwb25zZVR5cGUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHJlcXVlc3RPcHRpb25zLndpdGhDcmVkZW50aWFscyxcbiAgICB9KTtcbiAgfVxuXG5cblxuICAvKipcbiAgICogR2V0IENTUkYgdG9rZW5cbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0Q3NyZlRva2VuKCkge1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuYXBpQ29uZmlnLmNzcmY7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gZ2V0IENTUkYgdG9rZW4uYCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9ucyhIdHRwUmVxdWVzdE1ldGhvZC5nZXQsIG51bGwsIHJlcXVlc3RVcmwsIG51bGwsIG51bGwsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBSZXF1ZXN0IHRvIGdldCBDU1JGIFRva2VuXG4gICAqIEBwYXJhbSByZXNwb25zZVxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVDc3JmUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlcXVlc3ROYW1lID0gYENTUkYgdG9rZW4gcmVxdWVzdGA7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5jc3JmVG9rZW4gPSBib2R5Py5kYXRhPy50b2tlbjtcbiAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKFxuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICBTZXZlcml0eS5JbmZvcm1hdGlvbixcbiAgICAgICAgYFByZXBhcmluZyB0byBoYW5kbGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBmb3IgJHtyZXF1ZXN0TmFtZX0uYFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2coXG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgIFNldmVyaXR5Lldhcm5pbmcsXG4gICAgICAgIGBSZWNlaXZlZCB1bmV4cGVjdGVkIG51bGwvdW5kZWZpbmVkIHJlc3BvbnNlIGZvciAke3JlcXVlc3ROYW1lfS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19