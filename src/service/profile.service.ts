import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = '279c8aa535439abb0c8a';
  private client_secret = 'aad84f1be48025db367677e7a379621f6af2dbd3';


  constructor(private http: Http) {
    console.log('Service is now ready!');
    this.username = 'Evohmike';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username +
     '?client_id=' + this.clientid + '&client_secret=' + this.client_secret)
    .pipe(map(res => res.json()));
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username
    + '/repos?client_id=' + this.clientid + '&client_secret=' + this.client_secret)
    .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;

  }

 }
