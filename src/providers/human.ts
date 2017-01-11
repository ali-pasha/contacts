import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class Human {

headers: Headers;
  constructor(public http: Http) {
    this.headers = new Headers();
     this.headers.append('Access-Control-Allow-Origin', '*');
    // this.headers('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }

  loadStrangers(){
    var resp = this.http.get("https://api.randomuser.me/?results=10")
    .map(res => res.json());
    return resp;
    
  }

}
