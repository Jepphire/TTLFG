import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { map } from "rxjs-compat/operator/map";
import { tap } from "rxjs/operators";
import { User } from "./user.model";

interface AccountResponse {
  localId: string,
  email?: string,
  displayname: string,
  photoUrl?: string,
  passwordHash?: string,
  idToken?: string,
  refreshToken?: string,
  expiresIn?: string
}

@Injectable({providedIn: 'root'})

export class UserService {

  activeUser = new BehaviorSubject<User>(null);
  loadedUser = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  loadProfile(id: string) {
    this.loadedUser.next(this.getUserData(id));
    // console.log(this.loadedUser.value);
    // console.log(this.activeUser.value);
  }

  getUserData(id: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      id: id
    })
  }

  onAccountUpdate(idToken: string, displayName: string) {
    return this.http.post<AccountResponse>('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY', {
      idToken: idToken,
      displayName: displayName,
      reuturnSecureToken: false
    })
  }
}


