import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = window.sessionStorage.getItem('token');
  //here we would need to decode the token and compare the expiration date
  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
