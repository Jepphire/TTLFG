import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onCallAuthenticate() {

  }
}
