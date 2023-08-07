import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');

    // Here we would need to decode the token and compare the expiration date
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}