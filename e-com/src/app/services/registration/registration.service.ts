import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registrationUrl } from 'src/app/config/api';
import { Registration } from 'src/app/models/registration/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }; 

  constructor(private httpClient: HttpClient) {}

  signUp(data : Registration){
    return this.httpClient.post(registrationUrl, data, this.httpOptions);
  }

}
