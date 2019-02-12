import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material';

import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  repeatpassword: FormControl;
  submitted = false;
  responseMessage: string;
  loading = false;

  constructor(private translate: TranslateService,
    private router: Router,
    public snackBar: MatSnackBar,
    private _toastrService: ToastrService) {
      this.translate.setDefaultLang('nl');
    // if (localStorage.getItem('DefaultLang') === 'DU') {
    //   this.translate.setDefaultLang('nl');
    // } else {
    //   this.translate.setDefaultLang('en');
    // }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.loading = false;

    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]);
    this.email = new FormControl('', [Validators.required]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]);

    this.repeatpassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      repeatpassword: this.repeatpassword
    }, {
        validators: ConfirmPasswordValidator.MatchPassword
      });
  }

  registerUser(form: any) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return false;
    }

   
  }
}
