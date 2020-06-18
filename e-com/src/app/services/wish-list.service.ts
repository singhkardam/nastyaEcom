import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Subject, from, Observable } from 'rxjs';
import { wishListUrl, getWishListItemByUserId } from 'src/app/config/api'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { WishList, WishListItems } from 'src/app/models/wish-list'


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishListItems:WishListItems[] = [];

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  getWishListItem(): Observable<WishListItems[]>{
    return this.httpClient.get<WishListItems[]>(wishListUrl);
  }


  addWishList(wishList: WishList): Observable<any>{
    return this.httpClient.post(wishListUrl, wishList , this.httpOptions);
  }
  
  getWishListItemByUserId(user_id): Observable<WishList[]>{
    return this.httpClient.get<WishList[]>(getWishListItemByUserId + '/' + user_id);
  }
}
