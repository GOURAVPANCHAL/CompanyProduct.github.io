import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private http: HttpClient) {
  }
  getUserData() {
    let apiurl = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(apiurl);
  }
}
