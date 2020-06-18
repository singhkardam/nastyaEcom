import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { AuthService } from 'src/app/auth/auth.service'; 
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product'
import { WishList } from 'src/app/models/wish-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  wishList:WishList;
  id = JSON.parse(this.authService.getToken());
  product:Product[] = [];
  wishListItem:any;
  wishListStatus:boolean = true;
  constructor(
    private productService : ProductService,
    private wishListService : WishListService,
    private authService : AuthService,
    private router : Router,
    private elementRef : ElementRef
    ) { }

  ngOnInit() {
      this.getAllProduct();
      this.getProductByCategory();
  }

  getAllProduct(){ 
      this.productService.getProduct().subscribe(
        (data: any) => {
          this.product = data;
          if(this.authService.isLoggedIn()){
            data.data.map((a, b, c) => {
              this.wishListService.getWishListItemByUserId(this.authService.getUserId()).subscribe(
                (data: any) => {
                  data.data.map((val, index, data) => {
                    val.product_id;
                    if(a.id == val.product_id){
                      a.wishList = true;
                    }
                  })
                }
              ) 
            })
          }
        }
      );  
  }
  getProductByCategory(){
    this.productService.getMsg().subscribe(
      (data: any) => {
        this.product = data;
        //console.log(data); 
      }        
    )    
  }
  addToCart(ankit){
    alert("hi")
  }


  data:WishList;
  addToWishList(event){
    if(event.target.innerText == 'favorite_border'){
      if(this.authService.isLoggedIn()){
        event.target.innerText = 'favorite';
        event.target.style.color = '#dc3545';
        this.data = {
          user_id:this.authService.getUserId(),
          product_id:event.target.getAttribute('data-id')  
        }
        this.wishListService.addWishList(this.data).subscribe(() => {
          console.log(this.data);
        });
      }else{
        event.target.innerText = 'favorite_border';
        event.target.style.color = '#000';
        this.router.navigate(['/account/login']);
      }

    }
    console.log(event);

  }

  alreadyAdded(){
    alert("Already Added to Wishlist");
  }

}
