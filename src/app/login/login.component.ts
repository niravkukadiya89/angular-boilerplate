import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';

import { AuthenticationService } from './shared/services/authentication.service';
import { LoaderService } from '../core/loader/loader.service/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginStatus: string;

  constructor(private translate: TranslateService, private router: Router, private loaderService: LoaderService,
    private authService: AuthenticationService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
      this.translate.setDefaultLang('nl');
    }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.clearSessionStorage();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  loginUser(form: any) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loaderService.attach(this.authService.signinUser(form.value)).subscribe(response => {
      sessionStorage.setItem('token', response['data'].token);
      sessionStorage.setItem('active-user', response['data'].user._id);
      this.loaderService.attach(this.router.navigate(['./dashboard']));
    },
      error => {
        if (error['error'].error) {
          this.snackBar.open(error['error'].error, 'Success', {
            duration: 2500,
            verticalPosition: 'top'
          });
        }
      });
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}
