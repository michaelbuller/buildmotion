/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from '@buildmotion/configuration';
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private configService: ConfigurationService
  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('r360-portal-token');
    const sysAccId = localStorage.getItem('r360-portal-sysAccId');
    if (
      request.url.includes(this.configService.config.apiConfig.apiURL) &&
      !request.url.endsWith('auth/token') &&
      token &&
      sysAccId
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }
    return next.handle(request);
  }
}
