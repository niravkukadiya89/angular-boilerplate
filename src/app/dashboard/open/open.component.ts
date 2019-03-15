import { Component } from '@angular/core';
import * as data from './data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent {
  datainfo = data.data.data;

  constructor(private router: Router) { }
  rowClick() {
    this.router.navigate(['/view-tabdata']);
  }
}
