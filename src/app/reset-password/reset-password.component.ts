import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';

import { ResetpasswordService } from 'src/app/reset-password/shared/services/resetpassword.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email: any;
  resetForm: FormGroup;
  submitted = false;
  loginStatus: string;
  token: string;
  constructor(private formBuilder: FormBuilder , private resetpasswordservice: ResetpasswordService,
    private activeRoute: ActivatedRoute , private _toastrService: ToastrService , private router: Router,
    private translate: TranslateService, public snackBar: MatSnackBar) { 
    if (localStorage.getItem('DefaultLang') === 'DU') {
      this.translate.setDefaultLang('nl');
    } else {
      this.translate.setDefaultLang('en');
    }
    }

  ngOnInit() {
    this.token = this.activeRoute.snapshot.queryParams['token'];
    this.email = this.activeRoute.snapshot.queryParams['email'];
    this.resetForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required , Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      confirmpassword: new FormControl('', [Validators.required , Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
    });
  }

  resetpassword(form: any) {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return false;
    }
    this.resetpasswordservice.resetPassword(this.email , this.token , form.value).subscribe(response => {
     // this.loading = false;

      if (response['statusCode'] === 201 || response['statusCode'] === 200) {
        this.snackBar.open(this.translate.instant('Password Reset Sucessfully!!'), 'Success', {
          duration: 2500,
          verticalPosition: 'top'
        });

        setTimeout(() => {
          this.router.navigate(['./']);
        }, 5000);
      }
    },
      error => {
        this._toastrService.success(error['error'].error);
      }
    );

  }

}
