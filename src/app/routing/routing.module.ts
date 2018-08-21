import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from '/home/evohmike/GithubRepo/src/app/user/user.component';

// Defining routes
const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
