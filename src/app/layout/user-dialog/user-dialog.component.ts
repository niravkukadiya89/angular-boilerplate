import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

import { LoaderService } from 'src/app/core/loader/loader.service/loader.service';

import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  activeUserId: string;
  usersData: any;
  firstName: string;
  lastName: string;
  email: string;
  organizationName: string;
  organization: string;
  imageBlobUrl: string | ArrayBuffer;
  id;

  constructor(private userProfileService: UserProfileService,
    //   @Inject(MAT_DIALOG_DATA) public data: any,
    private loaderService: LoaderService,
    private snackbar: MatSnackBar
    //   public dialogRef: MatDialogRef<UserDialogComponent>
  ) {
    // this.id = data.id;
  }

  ngOnInit() {
    this.getUserDetails();
    this.getUserById();
  }

  getUserDetails() {
    this.loaderService.attach(this.userProfileService.getUsers())
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

  ExitUserInfoDialog(): void {
    //  this.dialogRef.close();
  }

  streamImg(id: any) {
    this.imageBlobUrl = null;
    this.userProfileService.streamImage(id).subscribe(response => {
      const blobfile = response;
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageBlobUrl = reader.result;
      }, false);
      if (blobfile) {
        reader.readAsDataURL(blobfile);
      }
    });
  }

  getUserById() {
    this.userProfileService.getUserDetailsById(this.id)
      .subscribe(response => {
        this.usersData = response['data'];
        this.firstName = response['data']['firstName'];
        this.lastName = response['data']['lastName'];
        this.email = response['data']['email'];
        if (this.usersData.organization.avatar) {
          this.streamImg(response['data']._id);
        }
        if (this.usersData.organization.name) {
          this.organizationName = response['data']['organization']['name'];
        }
      },
        error => {
          this.snackbar.open(error['error'].error, 'Error', {
            duration: 2500,
            verticalPosition: 'top'
          });
        });
  }
}
