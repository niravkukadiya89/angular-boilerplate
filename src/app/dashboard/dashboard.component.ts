import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  createNewProjectForm: FormGroup;
  BasicInfoTitle1: FormControl;
  BasicInfoTitle2: FormControl;
  SpecificationTitle1: FormControl;
  SpecificationTitle2: FormControl;
  submitted = false;
  loading = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('nl');
    // if (localStorage.getItem('DefaultLang') === 'DU') {
    //   this.translate.setDefaultLang('nl');
    // } else {
    //   this.translate.setDefaultLang('en');
    // }
  }

  ngOnInit() {
    this.loading = false;

    this.BasicInfoTitle1 = new FormControl('', [Validators.required]);
    this.BasicInfoTitle2 = new FormControl('', [Validators.required]);
    this.SpecificationTitle1 = new FormControl('', [Validators.required]);
    this.SpecificationTitle2 = new FormControl('', [Validators.required]);

    this.createNewProjectForm = new FormGroup({
      BasicInfoTitle1: this.BasicInfoTitle1,
      BasicInfoTitle2: this.BasicInfoTitle2,
      SpecificationTitle1: this.SpecificationTitle1,
      SpecificationTitle2: this.SpecificationTitle2
    });

    // $('#openModalPopup').click(() => {
    //   if (this.submitted) {
    //     this.createNewProjectForm.reset();
    //     this.submitted = false;
    //   }
    // });
  }

  // tslint:disable-next-line:no-unused
  createNewProject(form: any) {
    this.loading = true;
    this.submitted = true;

    if (this.createNewProjectForm.invalid) {
      this.loading = false;
      return false;
    }

    // $('#ClosePopup').click();
    this.loading = false;
  }
}
