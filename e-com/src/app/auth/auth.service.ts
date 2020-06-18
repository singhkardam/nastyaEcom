import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router, 
    private location: Location) { }
  sendToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
  getName(){
    if(this.isLoggedIn()){
      let getData = JSON.parse(localStorage.getItem("token"));
      let getNameFromData = getData[getData.length-1];
      return getNameFromData;
    }
  }
  private shareName = new BehaviorSubject<string>(this.getName());
  getShareName = this.shareName.asObservable();


  getLoginName(name: string){
    this.shareName.next(name);
  }


  getUserId(){
    if(this.isLoggedIn()){
      let getData = JSON.parse(localStorage.getItem("token"));
      let getIdFromData = getData[getData.length-3];
      return getIdFromData;
    }
  }

}
