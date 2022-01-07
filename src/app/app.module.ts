import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GroupsComponent } from './groups/groups.component';
import { MyGroupsComponent } from './groups/my-groups/my-groups.component';
import { UserComponent } from './user/user.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupItemComponent } from './groups/group-list/group-item/group-item.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AuthComponent } from './shared/auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptService } from './shared/auth/auth-intercept.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { GroupStartComponent } from './groups/group-start/group-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GroupsComponent,
    MyGroupsComponent,
    UserComponent,
    GroupListComponent,
    GroupItemComponent,
    GroupEditComponent,
    UserProfileComponent,
    AuthComponent,
    SignupComponent,
    UserEditComponent,
    GroupDetailComponent,
    GroupStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
