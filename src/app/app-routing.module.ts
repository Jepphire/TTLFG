import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AuthComponent } from './shared/auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { GroupStartComponent } from './groups/group-start/group-start.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'groups', component: GroupsComponent, children: [
    { path: '', component: GroupStartComponent },
    { path: ':id', component: GroupDetailComponent }
  ] },
  { path: 'groups/new', component: GroupEditComponent },
  { path: 'u', component: UserComponent, children: [
    { path: ':id', component: UserProfileComponent},
    { path: ':id/edit', component: UserEditComponent}
  ] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
