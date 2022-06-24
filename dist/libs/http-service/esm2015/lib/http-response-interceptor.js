/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@buildmotion/core';
import { Guid } from 'guid-typescript';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class HttpResponseInterceptor {
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
HttpResponseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpResponseInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpResponseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpResponseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpResponseInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=http-response-interceptor.js.map