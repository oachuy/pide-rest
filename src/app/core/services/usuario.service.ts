import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from "../services/storage.service";
import { Session } from '../models/session.model';
import { Parametro } from '../models/parametro.model';
import { Constantes } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	session: Session;
	private baseUrl = Constantes.baseURL+'usuario/';
	
	constructor(private http: HttpClient,
		private storageService: StorageService) { }

	validate(params: any): Observable<any> {
		return this.http
					.post<any>(this.baseUrl + 'verify', params)
					.pipe(map(res => { return res;}));
	}

	verifyAccount(params: any): Observable<any> {
		return this.http
					.post<any>(this.baseUrl + 'verify-account', params)
					.pipe(map(res => { return res;}));
	}

	recoverAccount(params: any): Observable<any> {
		return this.http
					.post<any>(this.baseUrl + 'recover-account', params)
					.pipe(
						map(res => { return res;})/*, 
						catchError((err: HttpErrorResponse) => {
							console.log(err);
							return throwError(err);
						})*/
					);
	}

	whenMember(rol: String): Observable<Parametro> {
		this.session = new Session(this.storageService.getCurrentSession());
		
		return this.http
					.post<Parametro>(this.baseUrl + 'verify-member', this.session)
					.pipe();
	}

	changePassword(parametro: Parametro): Observable<any> {
		this.session = new Session(this.storageService.getCurrentSession());

		return this.http
					.post<any>(this.baseUrl + 'change-password', this.session)
					.pipe(
						map(res => { return res;})/*, 
						catchError((err: HttpErrorResponse) => {
							console.log(err);
							return throwError(err);
						})*/
					);
	}

	getInformacion(): Observable<any> {
		return this.http
					.post<any>(this.baseUrl + 'info', new Session(this.storageService.getCurrentSession()))
					.pipe(map(res => { return res;}));
	}
}
