import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  loginName:string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getShareName.subscribe(
      (data: string) => {
        this.loginName = data;
      }
    )
  }

  

  logOut(){
    this.auth.logout();
  }
}
