import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmitLogin(authData) {
    this.authService.onLogin(
      authData.email,
      authData.password
    ).subscribe(responseData => {
      console.log(responseData)
    });
    this.authForm.reset();
    this.onCancelAuth();
  }

  onCancelAuth() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
