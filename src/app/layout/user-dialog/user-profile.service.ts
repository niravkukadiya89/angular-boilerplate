import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private _httpClient: HttpClient) {
  }

  getUsers() {
    return this._httpClient.get(environment.endPoint + 'user/list?');
  }

  getUserDetailsById(userId: string) {
    return this._httpClient.get(environment.endPoint + 'user/id/' + userId);
  }

  streamImage(userId: string): Observable<Blob> {
    return this._httpClient.get(environment.endPoint + 'user/id/' + userId + '/avatar/stream', { responseType: 'blob' });
  }

}
