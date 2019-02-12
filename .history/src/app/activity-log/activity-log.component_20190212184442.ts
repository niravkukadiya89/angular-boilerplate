import { Component, OnInit } from '@angular/core';

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
