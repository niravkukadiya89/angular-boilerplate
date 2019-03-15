import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';


import { LoaderService } from '../core/loader/loader.service/loader.service';
import { AuthenticationService } from '../core/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  submitted = false;
  loginStatus: string;
  firstName: string;

  constructor(private translate: TranslateService, private router: Router, private loaderService: LoaderService,
    private authService: AuthenticationService, private snackBar: MatSnackBar) {
    this.translate.setDefaultLang('nl');
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.clearSessionStorage();

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]);

    this.password = new FormControl('', [
      Validators.required
    ]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  loginUser(form: any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loaderService.attach(this.authService.signinUser(form.value)).subscribe(response => {
      sessionStorage.setItem('token', response['data'].token);
      sessionStorage.setItem('active-user', response['data'].id);
      this.router.navigate(['./dashboard']);
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
