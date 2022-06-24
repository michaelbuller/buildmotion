/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
export class HttpTokenInterceptor {
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
HttpTokenInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpTokenInterceptor, deps: [{ token: i1.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpTokenInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpTokenInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpTokenInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }]; } });
//# sourceMappingURL=http-token-interceptor.js.map