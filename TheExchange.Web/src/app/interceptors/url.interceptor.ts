import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, empty, throwError } from 'rxjs';
import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

	constructor(
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		// if (request.headers.has('Content-Type'))
		//    contentType = request.headers.get('Content-Type');

		request = request.clone({
			setHeaders: {
				'Content-Type': 'application/json'
			}
		});

		return next.handle(request);
	}
}
