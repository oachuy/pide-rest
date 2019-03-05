import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LoginObject} from "./login-object.model";
import {Session} from "../../core/models/session.model";
import { map } from 'rxjs/operators/map';
import { Constantes } from '../../core/constantes'; 



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

	private basePath = Constantes.baseURL;	
	constructor(private http: HttpClient) {}
	
	login(loginObj: LoginObject): Observable<Session> {
	    let params = new HttpParams().set('usuario',loginObj.usuario).set('contrasenia',loginObj.contrasenia).set('idsistema',loginObj.idsistema);
	    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
		return this.http.post<Session>(this.basePath + 'login', params.toString(),{headers: headers});
	}

	logout(): Observable<Boolean> {
		return this.http.post<Boolean>(this.basePath + 'logout', {});
	}
}