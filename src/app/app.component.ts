import { Component } from '@angular/core';
import {AuthenticationService} from "./login/shared/authentication.service";
import { HomeService } from "./core/services/home.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService, HomeService ]
})
export class AppComponent {
  title = 'PIDE PRONIED';
}
