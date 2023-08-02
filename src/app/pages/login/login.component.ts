import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginFormInterface } from 'src/app/shared/models/login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginActionInProgress = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  // matcher = new MyErrorStateMatcher();

  /**
   *
   */
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    },{updateOn: 'blur'});
  }

  /**
   *
   */
  submitForm(): void {
    if (this.loginForm.valid) {    
      this.loginActionInProgress = true;
    }
  }
}
