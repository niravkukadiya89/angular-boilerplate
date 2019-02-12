import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(public router: Router) { }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token == null || token === '') {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
