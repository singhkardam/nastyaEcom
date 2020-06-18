import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addCategoryUrl, getCategoryUrl } from 'src/app/config/api';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  addCategory(data: Category){
    return this.httpClient.post(addCategoryUrl, data, this.httpOptions);
  }

  getCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(getCategoryUrl);
  }
}
