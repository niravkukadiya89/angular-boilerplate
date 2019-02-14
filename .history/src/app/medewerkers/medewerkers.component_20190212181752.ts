import { Component, OnInit } from '@angular/core';

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
  selector: 'app-medewerkers',
  templateUrl: './medewerkers.component.html',
  styleUrls: ['./medewerkers.component.scss']
})
export class MedewerkersComponent implements OnInit {
  displayedColumns: string[] = ['Dossiernummer', 'Babynaam', 'Medewerker', 'Download PDF'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}