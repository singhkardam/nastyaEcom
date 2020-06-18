import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/admin/get-user.service';
import { ShowUser } from 'src/app/models/show-user';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  getUser:ShowUser[] = [];

  constructor(private getUserService : GetUserService) { }

  ngOnInit() {
    this.getUserService.getAllUser().subscribe((data) => {
      this.getUser = data;
    })
  }

}
