import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {HttpParams} from  "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewEncapsulation} from '@angular/core';
import { Constantes } from "../core/constantes";

@Component({
  selector: 'app-consulta-sunedu',
  templateUrl: './consulta-sunedu.component.html',
  styleUrls: ['./consulta-sunedu.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class ConsultaSuneduComponent implements OnInit {
  searchForm: FormGroup;
  title = 'sunedu-rest';
  restItems: any;
  restItemsUrl = Constantes.getRestItemsUrl() +'sunedu';

  cGenerico : string;
  dGenerico : string;
  length : number;
  suneduLista: any[]=[];
  loading = false;

  constructor(private http: HttpClient ,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({dni: ['', Validators.required] });
  }

  getRestItems(dni): void {
    
    this.loading = true;
    this.restItemsServiceGetRestItems(dni)
      .subscribe(
        restItems => {
          this.loading= false;
          this.restItems = restItems;
          if(this.restItems.suneduRespuesta){
            this.cGenerico = this.restItems.suneduRespuesta.cGenerico;
            this.dGenerico = this.restItems.suneduRespuesta.dGenerico;
            
            if(this.cGenerico=='00000'){
  	          this.length = this.restItems.suneduListaGtPersona.suneduGtPersonaList.length;

  	          for(let i=0;i<this.length;i++){
  	             this.suneduLista.push(this.restItems.suneduListaGtPersona.suneduGtPersonaList[i]);
  	          }
            }else{
               this.suneduLista=[];
            }
          }else{
             this.dGenerico = 'Error PIDE, repetir la búsqueda. ' + this.restItems.descripcion;
          }
        });
  }

  restItemsServiceGetRestItems(dni) {
   
    const params = new  HttpParams().set('dni', dni)
                                    .set('sistema',Constantes.getIdSistema());
    return this.http
      .get<any[]>(this.restItemsUrl,{params})
      .pipe(map(data => data));
  }

  onSubmit() {
    this.suneduLista=[];
    this.getRestItems(this.searchForm.controls.dni.value);
  }
}
