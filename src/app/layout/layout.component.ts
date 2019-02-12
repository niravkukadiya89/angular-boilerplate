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

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dialogRefUser: MatDialogRef<UserDialogComponent>;
  constructor(
    private translateService: TranslateService,
    private userProfileService: UserProfileService,
    private router: Router,
    private aroute: ActivatedRoute,
    private snackbar: MatSnackBar,
    public matDialog: MatDialog
  ) {
    this.translateService.setDefaultLang('nl');
    // if (localStorage.getItem('DefaultLang') === 'DU') {
    //   this.translateService.setDefaultLang('nl');
    // } else {
    //   this.translateService.setDefaultLang('en');
    // }
   
  }

  ngOnInit() {
    this.lang = localStorage.getItem('DefaultLang') || 'DU';
   // this.avatarSubscription = this._profileService.imageSource.subscribe(image => this.avatarData1 = image);

    // this.aroute.params.subscribe(params => {
    //   this.projectid = params.id;
    // });

   // this.getProjectList();
   // this.getUserDetails();
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

  

  SearchProjectDialog(templateRef: TemplateRef<any>) {
    this.matDialog.open(templateRef);
  }

  SearchUserDialog(templateRef: TemplateRef<any>) {
    this.matDialog.open(templateRef);
  }

  UserInfoDialog(userid) {
    this.dialogRefUser = this.matDialog.open(UserDialogComponent, {
      disableClose: false,
      data: { id: userid }
    });
    this.dialogRefUser.afterClosed().subscribe(_result => {
      this.dialogRefUser = null;
    });
  }

  CheckProjectDetails() {
    if (this.enterProject === null || this.enterProject === '' || this.enterProject === undefined) {
      this.matDialog.closeAll();
      this.snackbar.open('Project name is not entered yet!!', '', {
        duration: 2500,
        verticalPosition: 'top'
      });
    } else {
      const data = this.projectData.find(x => (x.name).toLowerCase() === (this.enterProject).toLowerCase());
      if (data !== undefined && (data.name.toLowerCase() === this.enterProject.toLowerCase())) {
        this.matDialog.closeAll();
        this.router.navigate(['dashboard/' + data._id]);
        this.snackbar.open('Project is found!!', 'Success', {
          duration: 2500,
          verticalPosition: 'top'
        });
      } else {
        this.matDialog.closeAll();
        this.snackbar.open('Project do not found!!', 'Failure', {
          duration: 2500,
          verticalPosition: 'top'
        });
      }
    }
  }

  getUserDetails() {
    this.userProfileService.getUsers()
      .subscribe(response => {
        this.usersData = response['data'];
      },
        error => {
          this.snackbar.open(error['error'].error, 'Error', {
            duration: 2500,
            verticalPosition: 'top'
          });
        });
  }

  CheckUserDetails() {
    if (this.enterUser === null || this.enterUser === '' || this.enterUser === undefined) {
      this.matDialog.closeAll();
      this.snackbar.open('Username is not entered yet!!', '', {
        duration: 2500,
        verticalPosition: 'top'
      });
    } else {
      const getUserdata = this.usersData.find(x => (x.email) === (this.enterUser) || 
      (x.firstName) === (this.enterUser) || (x.lastName) === (this.enterUser));
      if (getUserdata !== undefined && (getUserdata.email.toLowerCase() === this.enterUser.toLowerCase() || 
      getUserdata.firstName.toLowerCase() === this.enterUser.toLowerCase() ||
       getUserdata.lastName.toLowerCase() === this.enterUser.toLowerCase())) { 
        this.matDialog.closeAll();
        this.UserInfoDialog(getUserdata._id);
        this.snackbar.open('User is found!!', 'Success', {
          duration: 2500,
          verticalPosition: 'top'
        });
        this.enterUser = '';
      } else if (getUserdata === undefined) {
        this.matDialog.closeAll();
        this.snackbar.open('User do not found!!', 'Failure', {
          duration: 2500,
          verticalPosition: 'top'
        });
        this.enterUser = '';
      }
    }
  }
}
