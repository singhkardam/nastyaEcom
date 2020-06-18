import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [
    /*
    { id:1, productId:'qgt87', productName:'1 product', qty:3, price: 100 },
    { id:2, productId:'qgt45', productName:'2 product', qty:2, price: 75 },
    { id:3, productId:'qgt73', productName:'3 product', qty:1, price: 200 },
    { id:4, productId:'qgt10', productName:'4 product', qty:2, price: 50 },
    { id:5, productId:'qgt14', productName:'5 product', qty:3, price: 50 }
    */
  ];

  cartTotal : number = 0;
  numberOfCartItem : number = 0;

  constructor(private msg : MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product : Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product : Product){    
    let productExist = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if(!productExist){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.numberOfCartItem = 0;
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price);
      this.numberOfCartItem += item.qty;
    });
  }

}
