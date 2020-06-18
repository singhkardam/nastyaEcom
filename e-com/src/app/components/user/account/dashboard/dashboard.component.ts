import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loginName:string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getShareName.subscribe(
      (data: string) => {
        this.loginName = data;
      }
    )    
  }

}
