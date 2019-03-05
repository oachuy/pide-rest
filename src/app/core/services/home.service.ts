import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators/catchError'; 
import { map } from 'rxjs/operators';
import { StorageService } from "./storage.service";
import { Session } from '../models/session.model';
import { Constantes } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	session: Session;
  	private baseUrl = Constantes.baseURL+'home/';
	
	constructor(private http: HttpClient,
		private storageService: StorageService) { }

	getDashboard(): Observable<any> {
		return this.http
					.post<any>(this.baseUrl + 'dashboard', new Session(this.storageService.getCurrentSession()))
					.pipe(
						map(res => { return res;}),
						catchError((err, caught) => {
							//console.log(err.error);
							//console.log(caught);
							return throwError(err);
					    })
					);
	}

}
