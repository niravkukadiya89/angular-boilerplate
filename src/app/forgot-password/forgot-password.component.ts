import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  email: FormControl;
  submitted = false;
  loading = false;

  constructor(private translate: TranslateService,
   
    public _matSnackBar: MatSnackBar) {
      this.translate.setDefaultLang('nl');  
    // if (localStorage.getItem('DefaultLang') === 'DU') {
    //   this.translate.setDefaultLang('nl');
    // } else {
    //   this.translate.setDefaultLang('en');
    // }
  }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);

    this.forgotPasswordForm = new FormGroup({
      email: this.email
    });
  }

  submitForgotPasswordForm(form: any) {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    if (form.value['email'] !== '' || form.value['email'] !== undefined) {
      

    }

    // this.router.navigate(['login']);
  }
}
