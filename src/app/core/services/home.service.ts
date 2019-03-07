import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators/catchError'; 
import { map } from 'rxjs/operators';
import { StorageService } from "./storage.service";
import { Session } from '../models/session.model';
import { Constantes } from '../constantes';
import { forkJoin } from 'rxjs';  // RxJS 6 syntax


@Injectable({
  providedIn: 'root'
})
export class HomeService {
	session: Session;
	private baseUrl = Constantes.getRestItemsUrl();
	UrlCantidadxMetodo ="CantidadxMetodo";
	UrlCantidadxMetodoxSistema ="CantidadxMetodoxSistema";
	
	constructor(private http: HttpClient,
		private storageService: StorageService) { }

	getDashboardService(): Observable<any> {
		let response1 = this.http.get(this.baseUrl+this.UrlCantidadxMetodo);
    let response2 = this.http.get(this.baseUrl+this.UrlCantidadxMetodoxSistema);

    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1, response2]);
	}

}
