import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoaderService } from '../core/loader/loader.service/loader.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1001, name: 'Test User', weight: 'Test User', symbol: 'H' },
  { position: 1002, name: 'Test User', weight: 'Test User', symbol: 'H' },
  { position: 1003, name: 'Test User', weight: 'Test User', symbol: 'H' },
  { position: 1004, name: 'Test User', weight: 'Test User', symbol: 'H' },
  { position: 1005, name: 'Test User', weight: 'Test User', symbol: 'H' }

];

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('projectListPaginator') projectListingPaginator: MatPaginator;
  ProjectListDataSource = new MatTableDataSource();
  myProjectsDisplayedColumns: string[] = ['select', 'name', 'Location', 'meta.projectData.serviceContract', 'meta.projectData.contracttype',
  'createdAt', 'meta.projectData.projectStatus', 'notifications', 'actions'];
  
  displayedColumns: string[] = ['Dossiernummer', 'Babynaam', 'Medewerker', 'Download PDF'];
  dataSource = ELEMENT_DATA;

  constructor(private _translateService: TranslateService,
    public matDialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private elRef: ElementRef,
    private router: Router,
    public snackBar: MatSnackBar,
    private loaderService: LoaderService) {



    this._translateService.setDefaultLang('nl');

    // if (localStorage.getItem('DefaultLang') === 'DU') {
    //   this._translateService.setDefaultLang('nl');
    // } else {
    //   this._translateService.setDefaultLang('en');
    // }
  }

  ngOnInit() {
  }
}
