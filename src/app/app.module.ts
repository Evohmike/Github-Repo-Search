import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';



import { UserServicesService} from './user-services.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';

// const routes:Routes=[
//   {path:},
//   {path:}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    HttpClientModule


  ],
  providers: [UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
