import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Constantes } from "../core/constantes";
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

import {HomeService} from '../core/services/home.service';
//import  * as drilldown from 'highcharts/modules/drilldown.src.js'
//drilldown(Highcharts)
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loading = false;
  restItemsUrl = Constantes.getRestItemsUrl() +'CantidadxMetodoxSistema';
  Highcharts = Highcharts;
  
  mydataResCantxMetodoxSistema  =[];
  mydataResCantxMetodo =[];
  mydataDd =[];

  public responseCantidadxMetodo: any;
  public responseCantidadxMetodoxSistema: any;
  updateFlag  = false;

  chartOptions :any = {
    title: {
      text: 'Consultas realizadas'
    },
      subtitle: {
        text: 'Número de consultas en últimos 30 días'
      },
      chart: {
        type: 'column'
      },
      xAxis: {
        type :'category'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.0f}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b>'
      },
      series:[],
      "drilldown": {
        "series": []
      }
            
  };


  constructor(private http: HttpClient, private homeService : HomeService){
    
  }

  ngOnInit() {

      this.loading= true;
      this.homeService.getDashboardService()
        .subscribe(restItems => 
         {
          this.responseCantidadxMetodo = restItems[0];
          this.responseCantidadxMetodoxSistema= restItems[1];

          for(let i = 0; i < this.responseCantidadxMetodo.cntMetodoList.length ; i++){
            this.mydataResCantxMetodo[i] = {
               "name": this.responseCantidadxMetodo.cntMetodoList[i].metodoConsultado,
               "y": this.responseCantidadxMetodo.cntMetodoList[i].cantidad,
               "drilldown" : this.responseCantidadxMetodo.cntMetodoList[i].metodoConsultado
             }
             let z=0;
             for(let j = 0; j < this.responseCantidadxMetodoxSistema.cntMetList.length ; j++){
                 if(this.responseCantidadxMetodo.cntMetodoList[i].metodoConsultado ==this.responseCantidadxMetodoxSistema.cntMetList[j].metodo){
                  this.mydataDd [z] = [
                       this.responseCantidadxMetodoxSistema.cntMetList[j].descripcion,
                      this.responseCantidadxMetodoxSistema.cntMetList[j].cantidad
                  ];
                  z++;
                 }
              }

              this.mydataResCantxMetodoxSistema[i] = {
                "name": this.responseCantidadxMetodo.cntMetodoList[i].metodoConsultado,
                "id" : this.responseCantidadxMetodo.cntMetodoList[i].metodoConsultado,
                "data": this.mydataDd 
              }
              this.mydataDd=[];
          }

            setTimeout(()=>this.updateCharts(),500);
            this.loading= false;
        })  
  }

  updateCharts(){
    this.chartOptions.series = [{
      "name": "Método",
      "colorByPoint": true,
      "data": this.mydataResCantxMetodo
        
    }] ;
    this.chartOptions.drilldown.series= this.mydataResCantxMetodoxSistema;
    this.updateFlag = true;
  }
}
