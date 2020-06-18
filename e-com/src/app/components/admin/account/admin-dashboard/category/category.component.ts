import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/services/admin/category.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm:FormGroup;
  successMessage:boolean = false;
  model:Category;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.categoryForm = this.formBuilder.group({
      category_name:['', [Validators.required, Validators.pattern('[a-zA-Z]')]]
    })
  }
 

  onSubmit(){
    this.model = this.categoryForm.value;
    this.categoryService.addCategory(this.model).subscribe(
      result => {
        if(result){
          this.successMessage = true;
          this.categoryForm.reset();
          setTimeout(() => {
            this.successMessage = false;
          },2000)
        }
      }
    )
  }

}
