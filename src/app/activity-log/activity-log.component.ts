import { Component, OnInit } from '@angular/core';
import { data } from '../dashboard/open/data';


@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {
  datainfo = data.data;
  constructor() { }

  ngOnInit() {
  }
}
