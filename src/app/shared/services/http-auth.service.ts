import { Injectable } from '@angular/core';
import {  HttpInterceptor,  HttpRequest, HttpResponse, HttpHandler, HttpEvent,  HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
@Injectable()
export class HttpAuthService implements HttpInterceptor {
    constructor(public router: Router, public authenticationService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: any = localStorage.getItem('currentUser');
        // if (JSON.parse( token )['access_token'] && token !== null) {
        //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + JSON.parse( token )['access_token']) });
        // }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

      //  request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                    // success
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                if (error.status === 404 || error.message === 'Invalid Access Token' || error.message === 'Session Expired, Please login again') {
                    
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Seesion Expired,Please Login',
                            
                        })

                this.authenticationService.logout();
                }
                return throwError(error);
            }));
    }
}

