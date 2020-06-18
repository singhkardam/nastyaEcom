import { Injectable } from '@angular/core';
import { productsUrl, getProductsUrl, getProductDetailsById} from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  displayAllProduct:boolean = true;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(
    private httpClient:HttpClient
  ) { }

  insertProduct(data: Product){
    return this.httpClient.post(productsUrl, data, this.httpOptions);
  }
  getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(getProductsUrl);
  }

  getCategory(category_id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(getProductsUrl + '/'+ category_id);
  }
  


  /* 12-5-2020 */
    getProductDetails(id: any): Observable<Product[]>{
      return this.httpClient.get<Product[]>(getProductDetailsById + '/'+ id);
    }
  /* 12-5-2020 */
  subject = new Subject();

  sendMsg(product){
    //console.log(product);
    this.subject.next(product);
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
