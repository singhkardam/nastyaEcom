import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-poduct-details',
  templateUrl: './poduct-details.component.html',
  styleUrls: ['./poduct-details.component.scss']
})
export class PoductDetailsComponent implements OnInit {
  product:any;
  selectedItem:Product[] = [];
  id:number;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    /*
    this.productService.getProduct().subscribe(
      (data) => {
        this.activatedRoute.params.subscribe((params: Params) => {
          this.product = data;
          this.id = params['id'];
          this.selectedItem = this.product.data[this.id -1];
          console.log(this.id);
          console.log(this.selectedItem);
        });
      }
    )
    */
   this.activatedRoute.params.subscribe((params: Params) => {
     this.id = params.id;
     this.productService.getProductDetails(this.id).subscribe(
      (data: any) => {
        this.selectedItem = data.data;
        console.log(this.selectedItem);
      }
     );
   })
  }
  backPage(){
    this.location.back();
  }



}
