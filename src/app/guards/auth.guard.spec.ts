// import { TestBed } from '@angular/core/testing';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// import { authGuard } from './auth.guard';

// function fakeRouterState(url: string): RouterStateSnapshot {
//   return {
//     url,
//   } as RouterStateSnapshot;
// }

// describe('authGuard', () => {
//   let router: jasmine.SpyObj<Router>;
//   const dummyRoute: ActivatedRouteSnapshot = { url: '' };
//   const fakeUrl = '/protected';

//   const executeGuard: CanActivateFn = (...guardParameters) =>
//     TestBed.runInInjectionContext(() => authGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     router = jasmine.createSpyObj('Router', ['navigate']);
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });

//   it('should navigate to login page when token is not present', () => {
//     const canActivateFn = authGuard;
//     const route = { path: '/protected' };
//     const state = { url: '/protected' };

//     const result = canActivateFn(route, state);

//     expect(result).toBe(false);
//     expect(router.navigate).toHaveBeenCalledWith(['login']);
//   });

//   it('should allow access when token is present', () => {
//     const canActivateFn = authGuard;
//     const route = { path: '/protected' };
//     const state = { url: '/protected' };
//     spyOn(window.sessionStorage, 'getItem').and.returnValue('some_token');

//     const result = canActivateFn(route, state);

//     expect(result).toBe(true);
//     expect(router.navigate).not.toHaveBeenCalled();
//   });
// });
