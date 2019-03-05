import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from '../models/session.model';
import { StorageService } from "./storage.service";
import { catchError } from 'rxjs/operators/catchError';
import { Constantes } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  	session: Session;
	private baseUrl = Constantes.baseURL+'parametro/';

	constructor(private http: HttpClient,
		private storageService: StorageService) { }

  	getParametros(): Observable<any> {
		this.session = new Session(this.storageService.getCurrentSession());
		return this.http
					.post<any>(this.baseUrl + 'list', this.session)
					.pipe(map(res => { return res;}));
	}

}
