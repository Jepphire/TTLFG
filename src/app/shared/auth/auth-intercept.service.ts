import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take, exhaustMap } from "rxjs/operators";

import { UserService } from "../user.service";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthInterceptService implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.userService.activeUser.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedReq);
      }));
  }
}
