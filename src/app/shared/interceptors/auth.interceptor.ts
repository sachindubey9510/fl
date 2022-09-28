import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from 'src/app/session/state/session.query';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private sessionQuery: SessionQuery){

    }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.sessionQuery.getValue().token}`,
      },
    });

    return next.handle(req);
  }
}