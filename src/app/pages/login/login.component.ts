import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginAction = { inProgress: false, showError: false };
  errorMessage = 'An error has ocurred';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  /**
   *
   */
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  /**
   *
   */
  submitLoginForm(): void {
    if (this.loginForm.valid) {
      this.loginAction = { ...this.loginAction, inProgress: true };
      this.apiService
        .loginUser(this.loginForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.loginAction = { showError: true, inProgress: false };
            this.errorMessage = error.message;
            this.showErrorMessage();
            this.cd.detectChanges();
            throw error;
          })
        )
        .subscribe((res: { token: string }) => {
          sessionStorage.setItem('token', JSON.stringify(res.token));
          this.router.navigate(['main-page']);
        });
    }
  }

  /**
   *
   */
  showErrorMessage(): void {   
    setTimeout(() => {
      this.loginAction = { ...this.loginAction, showError: false };
      this.cd.detectChanges();
    }, 5000);
  }
}
