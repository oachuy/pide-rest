import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../core/services/storage.service";
import { Session } from '../../../core/models/session.model';
import { AppRoutingModule } from '../../../app-routing.module';
import { ConsultaReniecComponent} from '../../../consulta-reniec/consulta-reniec.component';
import { ConsultaSuneduComponent} from '../../../consulta-sunedu/consulta-sunedu.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-local-sidebar',
  templateUrl: './local-sidebar.component.html',
  styleUrls: ['./local-sidebar.component.css']
})
export class LocalSidebarComponent implements OnInit {

	nombreCompleto: string;
	sesion: Session;
    links: Array<{ text: string, path: string }>=[];

    constructor(private storageService: StorageService, private router: Router) {

    }
     
	ngOnInit() {

		this.sesion = this.storageService.getCurrentSession();
		this.nombreCompleto = this.sesion.nombreCompleto.split(" ")[0];

        for (let i =0; i < this.sesion.opciones.length ; i++ ){
		  this.links.push({ text: this.sesion.opciones[i].opcdescripcion, path: this.sesion.opciones[i].opcenlace});
        }


	}

	logout(): void {
		this.storageService.logout();
	}

}
