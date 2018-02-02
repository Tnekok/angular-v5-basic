import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Auth Interceptor: ', req);
        // requests are immutable, so we clone it and append out modifications to it with .clone()
        const clonedRequest = req.clone({ params: req.params.append('auth', this.authService.getToken()) });
        return next.handle(clonedRequest);
    }
}
