import { Component, OnInit } from "@angular/core";
import * as data from "./data";
// const data: any = require('./data.json');

@Component({
  selector: "app-open",
  templateUrl: "./open.component.html",
  styleUrls: ["./open.component.scss"]
})
export class OpenComponent implements OnInit {
  datainfo = data.data.data;

  constructor() {}

  ngOnInit() {
    console.log(data);
  }

  deleteUserById(id: any) {
    const index = this.datainfo.indexOf(id);
    this.datainfo.splice(index, 1);

    console.log(this.datainfo);
  }
  rowClick(event: any) {
    console.log('test=' + event.data.id);
  }
  redirect(id: any) {
    alert(id);
  }
}
