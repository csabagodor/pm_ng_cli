import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Storage } from './storage';

@Injectable()
export class MongoodbService implements Storage {

	constructor(private http: Http) {
	}

	get({route, params}: {
		route: string, params: any
	}): Observable<JSON> {
		return this.http.get('http://localhost:3000/' + route)
			.map((response: Response) => {
				return response.json().obj;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	set({body, headers}: {
		body: Object,
		headers: Object
	}) {
		let convertedBody = JSON.stringify(body);
		let convertedHeader = new Headers(headers);
		return this.http.post('http://localhost:3000/capture_entry', convertedBody, {headers: convertedHeader})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				return Observable.throw(error.json());
			});
	}

}
