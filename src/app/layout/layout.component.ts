import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserProfileService } from './user-dialog/user-profile.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit, OnDestroy {

  lang: string;
  avatarData1: any;
  avatarSubscription: Subscription;
  projectData: any;
  usersData: any;
  enterProject: string;
  enterUser: string;
  enterData: any;
  projectid: any;
  checkName: any;
  Found = true;
  currenturl:string;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dialogRefUser: MatDialogRef<UserDialogComponent>;
  constructor(
    private translateService: TranslateService,
    private userProfileService: UserProfileService,
    public router: Router,
    private aroute: ActivatedRoute,
    private snackbar: MatSnackBar,
    public matDialog: MatDialog
  ) {
    this.translateService.setDefaultLang('nl');
    console.log(this.router.url);
    this.currenturl =  this.router.url;
  }

  ngOnInit() {
    this.lang = localStorage.getItem('DefaultLang') || 'DU';
  }

  ngOnDestroy() {
  //  this.avatarSubscription.unsubscribe();
  }

  switchLanguage(language: string) {
    if (language === 'nl') {
      this.lang = 'DU';
    } else {
      this.lang = 'EN';
    }
    localStorage.setItem('DefaultLang', this.lang);
    this.translateService.use(language);
  }


  SearchUserDialog(templateRef: TemplateRef<any>) {
    this.matDialog.open(templateRef);
  }

}
