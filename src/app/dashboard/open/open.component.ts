import { Component, OnInit } from '@angular/core';
import * as data from './data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {
  datainfo = data.data.data;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(data);
  }

  deleteUserById(id: any) {
    const index = this.datainfo.indexOf(id);
    this.datainfo.splice(index, 1);
  }
  rowClick(event: any) {
    console.log('test=' + event.data.id);
    this.router.navigate(['./view-tabdata/' + event.data.id]);
  }
  redirect(id: any) {
    this.router.navigate(['./dashboard']);
  }
}
