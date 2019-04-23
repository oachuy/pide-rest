import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {LoginObject} from "./shared/login-object.model";
import {AuthenticationService} from "./shared/authentication.service";
import {StorageService} from "../core/services/storage.service";
import {UsuarioService} from "../core/services/usuario.service";
import {Session} from "../core/models/session.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    captchaValue = false;
    loginError = false;

    public error: {code: number, message: string} = null;

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private storageService: StorageService,
        private usuarioService: UsuarioService,
        private router: Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            usuario: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
            contrasenia: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%_&*]*')]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { 
            
            if(this.loginForm.controls.usuario.value ===""  &&  this.loginForm.controls.contrasenia.value ==="" ){
                this.loginError = false;
            }

             return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.error = null;
        this.loginForm.setErrors(null);
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        
        this.loading = true;

        this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
          data => this.verifyLogin(data),
          error => {
            this.error = error.error;
            this.loginForm.setErrors({logeo: true});
            this.loading = false;
          }
        );
    }

    private verifyLogin(data: Session){ 
        if(data.estado){
          this.storageService.setCurrentSession(data);
          this.router.navigate(['/home']);
        }
        else{
            this.loading = false;
            this.loginError = true;
        }
    }

    resolved(captchaResponse: string) {
        if (captchaResponse == null) {
            this.captchaValue = false;
        }else{
            this.captchaValue = true;
        }
    }
}