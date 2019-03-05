import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../core/services/storage.service";
import { Session } from '../../../core/models/session.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	nombreCompleto: String;
	sesion: Session;
	constructor(private storageService: StorageService) { }

	ngOnInit() {
		this.sesion = this.storageService.getCurrentSession();
		this.nombreCompleto = this.sesion.nombreCompleto.split(" ")[0];
		
	}

	logout(): void {
		this.storageService.logout();
	}

}


