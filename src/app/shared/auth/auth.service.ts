import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { User } from "../user.model";

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})

export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  onSignup(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuth(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }));
  }

  onLogin(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuth(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }));
  }

  private handleAuth(email: string, localId: string, idToken: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate);
    this.user.next(user)
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occurred.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch(errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'A user with this email already exists.';
        break;
      case 'EMAIL_NOT_FOUND' || 'INVALID_PASSWORD':
        errorMessage = 'Invalid email or password entered.';
        break;
    }
    return throwError(errorMessage)
  }
}
