import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  uri = 'http://localhost:4000/api/registration';

  constructor(private http: HttpClient) { }

  getUser(user) {
    console.log(user);
    return this.http.post(`${this.uri}`, user);
  }
}

