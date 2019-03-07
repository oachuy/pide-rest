import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from "./core/core.module";

import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { UpdateSelectDirective } from './core/directives/update-select.directive';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ErrorComponent } from './error/error.component';
import { LocalSidebarComponent } from './shared/layout/local-sidebar/local-sidebar.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { ConsultaReniecComponent } from './consulta-reniec/consulta-reniec.component';
import { ConsultaSuneduComponent } from './consulta-sunedu/consulta-sunedu.component';
import { AntjudicialComponent } from './antjudicial/antjudicial.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    UpdateSelectDirective,
    AyudaComponent,
    ErrorComponent,
    LocalSidebarComponent,
    ConsultaReniecComponent,
    ConsultaSuneduComponent,
    AntjudicialComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule, NgbPaginationModule, NgbAlertModule,
    RecaptchaModule,
    HighchartsChartModule
  ],

  entryComponents: [
    ConsultaReniecComponent,
    ConsultaSuneduComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }