import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {LoginObject} from "./shared/login-object.model";
import {AuthenticationService} from "./shared/authentication.service";
import {StorageService} from "../core/services/storage.service";
import {UsuarioService} from "../core/services/usuario.service";
import {Session} from "../core/models/session.model";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

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
            contrasenia: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%_&*]*')]],
            idsistema:['31']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
    }

    public submitLogin(): void {

        //this.router.navigate(['/home']);
        
        this.submitted = true;
        this.error = null;
        this.loginForm.setErrors(null);
        if(this.loginForm.valid){
            this.loading = true;

            this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
                data => this.correctLogin(data),
                error => {
                    this.error = error.error;
                    this.loginForm.setErrors({logeo: true});
                    this.loading = false;
                }
            );
        }
    }
    
    private correctLogin(data: Session){ // falta validar si la respuesta contiene estado: true o false
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/home']);
    }

    resolved(captchaResponse: string) {
        if (captchaResponse == null) {
            this.captchaValue = false;
        }else{
            this.captchaValue = true;
        }
    }
}