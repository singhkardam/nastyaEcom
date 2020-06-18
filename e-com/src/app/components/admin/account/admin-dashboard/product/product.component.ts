import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/admin/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  getcategory: Category[] = [];
  productForm:FormGroup;
  productModel:Product;
  succesMessage:boolean = false;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe((data) => {
      if(data){
        this.getcategory = data;
        //console.log(this.getcategory);
      }
    });

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      qty: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]), 
    });
  }

  onSubmit(){
    this.productModel = this.productForm.value;
    this.productService.insertProduct(this.productModel).subscribe(
      (data) => {
        this.productForm.reset();
        this.succesMessage = true;  
        setTimeout(() => {
          this.succesMessage = false;
        },2000)
      }
    )
  }

}
