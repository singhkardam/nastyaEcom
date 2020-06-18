import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/admin/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Renderer } from '@angular/core';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  category:Category[] = [];
  product:Product[] =[];
  cetegory_id:any;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private render: Renderer
    ) { }

  ngOnInit() {
    this.allCategory();
  }

  allCategory(){
    this.categoryService.getCategory().subscribe(
      (data) => {
        this.category = data;
      }
    )
  }

  showProductByCategory(cetegory_id?: number){
    let products: Observable<Product[]>;
    if (cetegory_id == undefined || cetegory_id == null) {
      products = this.productService.getProduct();
    } else {
      products = this.productService.getCategory(cetegory_id);
    }
    products.subscribe(
      (data) => {
        this.product = data;
        //console.log(this.product);
        this.productService.sendMsg(this.product);
      }        
    );
  }  

}
