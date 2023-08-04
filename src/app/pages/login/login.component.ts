import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  loginActionInProgress = false;
  showErrorMessageFlag = false;
  errorMessage = 'An error has ocurred';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
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
      this.loginActionInProgress = true;
      this.apiService
        .loginUser(this.loginForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.loginActionInProgress = false;
            this.errorMessage = error.message;
            this.showErrorMessage();
            throw error;
          })
        )
        .subscribe((res: { token: string }) => {          
          window.sessionStorage.setItem('token', JSON.stringify(res.token));
          this.router.navigate(['main-page']);
        });
    }
  }

  /**
   *
   */
  showErrorMessage(): void {
    this.showErrorMessageFlag = true;
    setTimeout(() => {
      this.showErrorMessageFlag = false;
    }, 3000);
  }
}
