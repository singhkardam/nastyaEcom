import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})


export class ShowProductsComponent implements OnInit {
  product:Product[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (data) => {
        this.product = data;
        //console.log(this.product);
      }
    );
  }


}
