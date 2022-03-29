import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HttpResponseInterceptor implements HttpInterceptor {
    displayToUser: boolean;
    doNotDisplayToUser: boolean;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    determineResponseStatus(status: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpResponseInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpResponseInterceptor>;
}
