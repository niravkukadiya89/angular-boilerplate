import { Component, OnInit } from '@angular/core';
import { ViewTabdataService } from './services/view-tabdata.service';
import { LoaderService } from '../core/loader/loader.service/loader.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tabdata',
  templateUrl: './view-tabdata.component.html',
  styleUrls: ['./view-tabdata.component.scss']
})
export class ViewTabdataComponent implements OnInit {
  OrgDataSource: any;
  orgdata: any;
  orgvalue: any = 0;
  constructor(
    private viewtabdataservice: ViewTabdataService,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {
    this.getOrg();
  }

  getOrg() {
    this.loaderService.attach(this.viewtabdataservice.getOrg()).subscribe(response => {
      if (response) {
        this.OrgDataSource = response['data'].reverse();
        this.orgdata = this.OrgDataSource.map(orgname => {
          return {id : orgname._id, name: orgname.name};
        });
        console.log(this.orgdata);
       // return orgdata;
      }
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
  assignorg() {
    console.log(this.orgvalue);
    console.log(this.route);
    console.log(this.route.url.split('/')[2]);
  }

}
