import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginUrl } from 'src/app/config/api';
import { Login } from 'src/app/models/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  logIn(data : Login){
    return this.httpClient.post(loginUrl, data, this.httpOptions);
  }  
}
