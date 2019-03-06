import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewTabdataService {
  constructor(private httpClient: HttpClient) { }

  getOrg() {
    return this.httpClient.get(environment.endPoint + 'organization/list?');
  }
}
