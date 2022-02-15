/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('r360-portal-token');
    const sysAccId = localStorage.getItem('r360-portal-sysAccId');
    if (
      request.url.includes('box.core.r360') &&
      !request.url.endsWith('auth/token') &&
      token &&
      sysAccId
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        setParams: {
          '.systemAccount.id': sysAccId,
        },
      });
    }
    return next.handle(request);
  }
}
