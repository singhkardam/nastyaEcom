import { Injectable } from '@angular/core';
import { getAllUser } from 'src/app/config/api';
import { ShowUser } from 'src/app/models/show-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private httpClient:HttpClient) { }

  getAllUser() : Observable<ShowUser[]>{
    return this.httpClient.get<ShowUser[]>(getAllUser);
  }
}
