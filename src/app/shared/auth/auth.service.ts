import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

  constructor(private http: HttpClient) {}

  onSignup(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  onLogin(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
