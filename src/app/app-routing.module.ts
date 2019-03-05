import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { AyudaComponent } from "./ayuda/ayuda.component";
import { ErrorComponent } from "./error/error.component";
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";
import { ConsultaReniecComponent} from './consulta-reniec/consulta-reniec.component';
import { ConsultaSuneduComponent} from './consulta-sunedu/consulta-sunedu.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '', component: HomeLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ] },
      { path: 'ayuda', component: AyudaComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ] },
      { path: 'consulta-reniec', component: ConsultaReniecComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ] },
      { path: 'consulta-sunedu', component: ConsultaSuneduComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ] },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

