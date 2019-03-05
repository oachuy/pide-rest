import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../core/services/storage.service";
import { Session } from '../../core/models/session.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  sesion: Session;
  sidebarlocal: boolean = false;
  now : any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  	this.sesion = this.storageService.getCurrentSession();
    this.sidebarlocal = true;
    this.now = new Date();
  }

}
