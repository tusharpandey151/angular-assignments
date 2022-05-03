import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let modifiedReq = req.clone(
            {
                headers: req.headers.append('Auth','SomeAuthKey')
            }
            );
        return next.handle(modifiedReq);
        //return next.handle(req);
    }

}