import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  error: string = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmitSignup(signupData) {
    this.authService.onSignup(
      signupData.email,
      signupData.password
      ).subscribe(
        responseData => {
        console.log(responseData);
        this.router.navigate(['']);
      },
        errorData => {
          this.error = errorData;
          console.log(errorData)
        })
  }

  onCancelSignUp() {
    this.router.navigate(['../'])
  }
}
