import { Observable } from 'rxjs';

export interface Storage {
	get<T>(key: Object): Observable<T>;
	set<T>(key: Object): Observable<void>;
}
