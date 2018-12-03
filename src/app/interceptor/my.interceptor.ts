import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MyInterceptor implements HttpInterceptor {
    // tslint:disable-next-line:max-line-length
    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Iam in Interceptor');
        // tslint:disable-next-line:prefer-const
         let req1 = req.clone({
           setHeaders : {
            'authorization' : 'asasasasd'
           }
        });
        return handler.handle(req);
    }

}


