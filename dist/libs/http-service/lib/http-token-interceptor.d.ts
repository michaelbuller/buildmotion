import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from '@buildmotion/configuration';
import * as i0 from "@angular/core";
export declare class HttpTokenInterceptor implements HttpInterceptor {
    private configService;
    constructor(configService: ConfigurationService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpTokenInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpTokenInterceptor>;
}
