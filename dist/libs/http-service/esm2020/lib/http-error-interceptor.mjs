/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiMessage, ApiMessageType, ApiResponse } from '@buildmotion/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class HttpErrorInterceptor {
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
                if (error?.error?.error_description) {
                    apiErrorResponse.message = error.error.error_description;
                }
                // An unhandled error/exception - may not want to display this information to an end-user.
                apiErrorResponse.messages.push(new ApiMessage(`HTTP_ERROR`, `${error.status}: ${error.statusText}. ${error.message}`, ApiMessageType.Error));
                return throwError(apiErrorResponse);
            }
        }
    }
}
HttpErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
HttpErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HttpErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvaHR0cC1zZXJ2aWNlL3NyYy9saWIvaHR0cC1lcnJvci1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRNUUsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUlsQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFKekIsT0FBTztJQUNULENBQUM7SUFLRCxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxXQUFXLENBQUMsS0FBd0I7UUFDNUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbkMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO1FBQ3BELGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXhDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUM7UUFFRCxpR0FBaUc7UUFDakcsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUNyQyxrRUFBa0U7WUFDbEUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUIsSUFBSSxVQUFVLENBQ1osWUFBWSxFQUNaLDBDQUEwQyxFQUMxQyxjQUFjLENBQUMsS0FBSyxDQUNyQixDQUNGLENBQUM7WUFDRixPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxtRUFBbUU7WUFDbkUsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQzs7Ozs7bUJBS0c7Z0JBQ0gsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO29CQUNuQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQTtpQkFDekQ7Z0JBQ0QsMEZBQTBGO2dCQUMxRixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QixJQUFJLFVBQVUsQ0FDWixZQUFZLEVBQ1osR0FBRyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUN4RCxjQUFjLENBQUMsS0FBSyxDQUNyQixDQUNGLENBQUM7Z0JBQ0YsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQzs7aUhBM0VVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBBcGlNZXNzYWdlLCBBcGlNZXNzYWdlVHlwZSwgQXBpUmVzcG9uc2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkaXNwbGF5VG9Vc2VyID0gdHJ1ZTtcbiAgZG9Ob3REaXNwbGF5VG9Vc2VyID0gZmFsc2U7XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgcmV0cnkoMSksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gaGFuZGxlIGVycm9ycyBkdXJpbmcgSFRUUC9XZWIgQVBJIG9wZXJhdGlvbnMuIFRoZSBjYWxsZXIgZXhwZWN0c1xuICAgKiBhbiBPYnNlcnZhYmxlIHJlc3BvbnNlIC0gdGhpcyBtZXRob2Qgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSByZXNwb25zZSBmcm9tXG4gICAqIHRoZSBzZXJ2ZXIgb3IgYSBuZXcgW0FwaVJlc3BvbnNlXSBhcyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgY2xpZW50IHRvXG4gICAqIGhhbmRsZS5cbiAgICpcbiAgICogQHBhcmFtIGVycm9yIFRoZSBlcnJvciBmcm9tIHRoZSBIVFRQIHJlc3BvbnNlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgYXBpRXJyb3JSZXNwb25zZSA9IG5ldyBBcGlSZXNwb25zZSgpO1xuICAgIGFwaUVycm9yUmVzcG9uc2UuaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgYXBpRXJyb3JSZXNwb25zZS5tZXNzYWdlID0gJ1VuZXhwZWN0ZWQgSFRUUCBlcnJvci4nO1xuICAgIGFwaUVycm9yUmVzcG9uc2UudGltZXN0YW1wID0gbmV3IERhdGUoKTtcblxuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2F1dGgvbG9naW4nKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIGJhc2UgZXJyb3Igb2JqZWN0IHRvIGRldGVybWluZSBpZiB0aGUgZXJyb3IgdHlwZSBpcyBhIGdlbmVyYWwgb3IgYW4gYWxsLXB1cnBvc2UgZXJyb3IuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBhcGlFcnJvclJlc3BvbnNlLm1lc3NhZ2VzLnB1c2goXG4gICAgICAgIG5ldyBBcGlNZXNzYWdlKFxuICAgICAgICAgIGBIVFRQX0VSUk9SYCxcbiAgICAgICAgICBgQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLmAsXG4gICAgICAgICAgQXBpTWVzc2FnZVR5cGUuRXJyb3JcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGFwaUVycm9yUmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgQVBJIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSAoZmFpbHVyZSBzdGF0dXMgY29kZSkuXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXNwb25zZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBrbm93biBlcnJvciByZXNwb25zZSBmb3JtYXQgZnJvbSB0aGUgQVBJL1NlcnZlcjsgcmV0aHJvdyB0aGlzIHJlc3BvbnNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaHJvd2luZyB0aGUgZXJyb3Igc2VuZHMgdGhlIE9ic2VydmFibGUgdG8gdGhlIHN1YnNjcmliZXIgb2YgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgKiBUaGUgc3Vic2NyaWJlciBvciBjb25zdW1lciBzaG91bGQgaGFuZGxlIHRoZSByZXNwb25zZSBhbmQgZGlzcGxheSBvZiBtZXNzYWdlcy5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlcnJvcj8uZXJyb3I/LmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgYXBpRXJyb3JSZXNwb25zZS5tZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgICAvLyBBbiB1bmhhbmRsZWQgZXJyb3IvZXhjZXB0aW9uIC0gbWF5IG5vdCB3YW50IHRvIGRpc3BsYXkgdGhpcyBpbmZvcm1hdGlvbiB0byBhbiBlbmQtdXNlci5cbiAgICAgICAgYXBpRXJyb3JSZXNwb25zZS5tZXNzYWdlcy5wdXNoKFxuICAgICAgICAgIG5ldyBBcGlNZXNzYWdlKFxuICAgICAgICAgICAgYEhUVFBfRVJST1JgLFxuICAgICAgICAgICAgYCR7ZXJyb3Iuc3RhdHVzfTogJHtlcnJvci5zdGF0dXNUZXh0fS4gJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICAgICAgICBBcGlNZXNzYWdlVHlwZS5FcnJvclxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoYXBpRXJyb3JSZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=