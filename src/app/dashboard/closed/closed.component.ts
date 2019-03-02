import { Component, OnInit } from '@angular/core';
import * as data from '../open/data';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.scss']
})
export class ClosedComponent implements OnInit {
  datainfo = data.data.data;
  constructor() { }

  ngOnInit() {
    console.log(data);
  }

}
