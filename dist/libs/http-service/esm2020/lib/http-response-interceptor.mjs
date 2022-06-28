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
HttpResponseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpResponseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpResponseInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvaHR0cC1zZXJ2aWNlL3NyYy9saWIvaHR0cC1yZXNwb25zZS1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUtMLFlBQVksRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3JDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFRSxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7S0FzQzVCO0lBcENDLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2xELE9BQU8sS0FBSyxDQUFDO2lCQUNkO3FCQUFNO29CQUNMLGtGQUFrRjtvQkFDbEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFDdEMsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUM5QixXQUFXLENBQUMsT0FBTyxHQUFHLG9EQUFvRCxDQUFDO29CQUMzRSxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ25DLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbkUsV0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRTFDLG1DQUFtQztvQkFDbkMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUNqQixJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsdUJBQXVCLENBQUMsTUFBYztRQUNwQyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7b0hBdkNVLHVCQUF1Qjt3SEFBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnZ3VpZC10eXBlc2NyaXB0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgZGlzcGxheVRvVXNlciA9IHRydWU7XG4gIGRvTm90RGlzcGxheVRvVXNlciA9IGZhbHNlO1xuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIG1hcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgIGlmIChldmVudC5ib2R5ICYmIGV2ZW50LmJvZHkuaWQgJiYgZXZlbnQuYm9keS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBXUkFQIEFQSSBSRVNQT05TRTsgUkVNT1ZFIFdIRU4gQVBJIFJFVFVSTlMgREFUQSBJTiBQUk9QRVIgRk9STUFUL1NDSEVNQTtcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gbmV3IEFwaVJlc3BvbnNlKCk7XG4gICAgICAgICAgICBhcGlSZXNwb25zZS5kYXRhID0gZXZlbnQuYm9keTtcbiAgICAgICAgICAgIGFwaVJlc3BvbnNlLm1lc3NhZ2UgPSAnQVBJIHJlc3BvbnNlIHdyYXBwZWQgYnkgW0h0dHBSZXNwb25zZUludGVyY2VwdG9yXS4nO1xuICAgICAgICAgICAgYXBpUmVzcG9uc2UudGltZXN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGFwaVJlc3BvbnNlLmlzU3VjY2VzcyA9IHRoaXMuZGV0ZXJtaW5lUmVzcG9uc2VTdGF0dXMoZXZlbnQuc3RhdHVzKTtcbiAgICAgICAgICAgIGFwaVJlc3BvbnNlLmlkID0gR3VpZC5jcmVhdGUoKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG5ldyByZXNwb25zZS93cmFwcGVkO1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmNsb25lKHtcbiAgICAgICAgICAgICAgYm9keTogYXBpUmVzcG9uc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZGV0ZXJtaW5lUmVzcG9uc2VTdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==