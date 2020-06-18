import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration/registration';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  successMsg: boolean = false;
  signUpForm:FormGroup;
  model:Registration; 


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private auth: AuthService 
  ) { }

  ngOnInit() {
    this.createForm();
    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/account/dashboard');
      return true;
    }
  }

  createForm(){
    this.signUpForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.pattern('[a-zA-Z]')]],
      mobileNumber:['', [Validators.required, Validators.minLength(10)]],
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required]],
    });
  }



  onSubmit(){
    this.model = this.signUpForm.value;
    this.registrationService.signUp(this.model).subscribe(
      result => {
        if(result){
          this.successMsg = true;
          if(this.successMsg === true)
          setTimeout(() => {
            this.router.navigateByUrl('/account/login');
          },1000)
        }
      }
    );
  }

}
