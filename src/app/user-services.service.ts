import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map";

import {Users} from './users';
import {Repos} from './repos';
@Injectable({
  profile:Users;
  repos:Repos; 
  Users:any;
  result:any;
})
export class UserServicesService {

  constructor( private http:HttpClient) {
    this.profile = new Users("","","","","","",new Date());
    this.repos = new Repos("","","",new Date());
   }
}
