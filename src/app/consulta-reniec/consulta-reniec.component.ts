import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {HttpParams} from  "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from "../core/services/storage.service";
import { Constantes } from "../core/constantes";

@Component({
  selector: 'app-consulta-reniec',
  templateUrl: './consulta-reniec.component.html',
  styleUrls: ['./consulta-reniec.component.css']
})
export class ConsultaReniecComponent implements OnInit {
  searchForm: FormGroup;
  title = 'pide-rest';
  restItems: any;
  restItemsUrl = Constantes.getRestItemsUrl() +'reniec';

  apPrimer: string;
  apSegundo : string;
  direccion : string;
  estadoCivil: string;
  imageData : any;
  prenombres: string;
  restriccion : string;
  ubigeo: string;
  coResultado : string;
  deResultado : string;
  loading = false;

  constructor(private http: HttpClient ,private formBuilder: FormBuilder, private storageService: StorageService) { }

  ngOnInit() {
     this.searchForm = this.formBuilder.group({dni: ['', Validators.required] });
   
  }

   // Read all REST Items
  getRestItems(dni): void {

    this.loading= true;
    this.restItemsServiceGetRestItems(dni)
      .subscribe(
        restItems => {
          this.loading= false;
          this.restItems = restItems;           
          this.coResultado= this.restItems.coResultado;
          this.deResultado=this.restItems.deResultado;

          if (this.coResultado=='0000'){
            this.apPrimer = this.restItems.reniecDatosPersona.apPrimer;
            this.apSegundo = this.restItems.reniecDatosPersona.apSegundo;
            this.direccion = this.restItems.reniecDatosPersona.direccion;
            this.estadoCivil = this.restItems.reniecDatosPersona.estadoCivil;

            //foto
            this.imageData = 'data:image/' + 'png' + ';base64,' + this.restItems.reniecDatosPersona.foto;
            this.prenombres = this.restItems.reniecDatosPersona.prenombres;
            this.restriccion= this.restItems.reniecDatosPersona.restriccion;
            this.ubigeo = this.restItems.reniecDatosPersona.ubigeo;

          }else{

            this.apPrimer = null;
            this.apSegundo = null;
            this.direccion = null;
            this.estadoCivil = null;

            //foto
            this.imageData = null;
            this.prenombres = null;
            this.restriccion= null;
            this.ubigeo = null;
            
          }
        }
      )
  }

  

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems(dni) {

    const params = new  HttpParams().set('dni', dni).
                                     set('user',this.storageService.getCurrentSession().perNroDocumento).
                                     set('clave',this.storageService.getCurrentSession().perNroDocumento).
                                     set('sistema',Constantes.getIdSistema());
    return this.http
      .get<any[]>(this.restItemsUrl,{params})
      .pipe(map(data => data));
  }

  onSubmit() {
    this.getRestItems(this.searchForm.controls.dni.value);
  }
}
