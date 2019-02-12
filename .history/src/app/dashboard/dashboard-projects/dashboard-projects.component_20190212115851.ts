import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';

import {
  MatPaginator, MatTableDataSource, MatDialog,
  MatDialogRef, MatSnackBar, MatSort, MatTabChangeEvent
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { LoaderService } from 'src/app/core/loader/loader.service/loader.service';


declare var ol: any;


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1001, name: 'Preston Case', weight: 'Tania Koch', symbol: 'H' },
  { position: 3546, name: 'Preston Case', weight: 'Tania Koch', symbol: 'H' },
  { position: 3546, name: 'Preston Case', weight: 'Tania Koch', symbol: 'H' },
  { position: 3546, name: 'Preston Case', weight: 'Tania Koch', symbol: 'H' },
  { position: 3546, name: 'Preston Case', weight: 'Tania Koch', symbol: 'H' }

];

@Component({
  selector: 'app-dashboard-projects',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})



export class DashboardProjectsComponent implements OnInit {
  map: any;
  label1: any;
  projectstatus1: any;
  lng1: any;
  lat1: any;
  flag1 = false;
  srchVar: string;
  searchFlag: boolean;
  flag = false;

  editLocation: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Location: any[];
  title: string;
  submitted = false;
  show = false;
  buttonName = 'List';
  lstProjects: any[] = [];

  key: number;
  latlong: any;
  SelectedProjectIdToDelete: string;
  organizationId: string;
  dropdownSettings = {};
  SelectedBuildingOwnerIndexToUpdate: any;
  markers: any[] = [];
  zoom = 5;
  myProjectsDisplayedColumns: string[] = ['select', 'name', 'Location', 'meta.projectData.serviceContract', 'meta.projectData.contracttype',
    'createdAt', 'meta.projectData.projectStatus', 'notifications', 'actions'];
  matDialogRef: MatDialogRef<any>;
  ProjectListDataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  @ViewChild('projectListPaginator') projectListingPaginator: MatPaginator;
  @ViewChild('buildingOwnerPaginator') buildingOwnerPaginator: MatPaginator;

  step = 1;
  CreateComponentFormTitle: string;
  CreateComponentFormAddUpdateButton: string;
  vectorLayer: any;
  vectorLayer1: any;
  count = 1;
  projectData: any;


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
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'value',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }








}

