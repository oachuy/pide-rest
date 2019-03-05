import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../core/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  SRFT: number;
  SRDG: number;

  LSR: number;
  SVFT: number;
  SVDG: number;

  AP: number;
  BP: number;
  DBP: number;
  TP: number;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router
    ) { }

    ngOnInit() {
        
  }


}
