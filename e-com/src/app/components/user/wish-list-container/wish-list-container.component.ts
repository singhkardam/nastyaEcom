import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';
import { AuthService } from 'src/app/auth/auth.service';
import { WishListItems } from 'src/app/models/wish-list';
@Component({
  selector: 'app-wish-list-container',
  templateUrl: './wish-list-container.component.html',
  styleUrls: ['./wish-list-container.component.scss']
})
export class WishListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }




}
