import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userSub = this.userService.getUserData(this.route.snapshot.params['id']).subscribe(userData => {
      console.log(userData);
    })
  }

  onCallGetUserData() {
    this.userService.getUserData(this.route.snapshot.params['id']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
