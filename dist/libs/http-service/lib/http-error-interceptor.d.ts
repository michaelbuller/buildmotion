import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class HttpErrorInterceptor implements HttpInterceptor {
    private router;
    constructor(router: Router);
    displayToUser: boolean;
    doNotDisplayToUser: boolean;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    /**
     * Use to handle errors during HTTP/Web API operations. The caller expects
     * an Observable response - this method will either return the response from
     * the server or a new [ApiResponse] as an Observable for the client to
     * handle.
     *
     * @param error The error from the HTTP response.
     */
    protected handleError(error: HttpErrorResponse): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpErrorInterceptor>;
}
