import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {RoutingModule} from './routing/routing.module';

import { ProfileService } from '../service/profile.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule


  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
