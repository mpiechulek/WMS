import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { LoginModule } from './login.module';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, pipe, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { HttpErrorResponse } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let apiService: ApiService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        LoginModule,
        RouterTestingModule.withRoutes([
          { path: 'main-page', component: MainPageComponent },
        ]),
      ],
      providers: [ApiService],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    formBuilder = TestBed.inject(FormBuilder);

    component.loginForm = formBuilder.group({
      email: ['johndoe@example.com'],
      password: ['1234'],
    });

    apiService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enter login data and press login button, should call submitForm()', fakeAsync(() => {
    //Filling first input
    const emailInput = fixture.nativeElement.querySelector('input[type=email]');
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    expect(component.loginForm.value.email).toBe('test@example.com');

    //Filling second input
    const passwordInput = fixture.nativeElement.querySelector(
      'input[type=password]'
    );
    passwordInput.value = 'password123';
    passwordInput.dispatchEvent(new Event('input'));
    expect(component.loginForm.value.password).toBe('password123');

    //Clicking button (submitting form)
    const buttonElement = fixture.nativeElement.querySelector('button');
    spyOn(component, 'submitLoginForm').and.callThrough();
    //Service response
    spyOn(apiService, 'loginUser').and.returnValue(of({ token: '123' }));
    buttonElement.click();
    expect(component.submitLoginForm).toHaveBeenCalled();
  }));

  it('should return an error when calling ', fakeAsync(() => {
    // spyOn(component, 'submitLoginForm').and.callThrough();
    // spyOn(apiService, 'loginUser').and.returnValue(
    //   throwError(new HttpErrorResponse({ error: 'error' }))
    // );
    // //Set some values to make form valid
    // component.loginForm.patchValue({
    //   email: 'johndoe@example.com',
    //   password: '1234',
    // });
    // // call the method in the component
    // component.submitLoginForm();
    // tick();
    // expect(apiService.loginUser).toHaveBeenCalled(); 
  }));

  it('should change the showErrorMessageFlag to true and after 3s to false', fakeAsync(() => {
    expect(component.showErrorMessageFlag).toEqual(false);
    component.showErrorMessage();
    expect(component.showErrorMessageFlag).toEqual(true);
    tick(3000);
    expect(component.showErrorMessageFlag).toEqual(false);
  }));
});
