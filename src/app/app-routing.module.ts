import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AuthComponent } from './shared/auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: AuthComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/new', component: GroupEditComponent },
  { path: 'users/profile', component: UserProfileComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
