import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  model:Login;
  encryptMode: boolean;
  constructor(
    private router : Router,
    private loginService : LoginService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.encryptMode = true;
    this.createForm();

    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/account/dashboard');
      return true;
    }
  }
  
  createForm(){
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required]],
    });
  }
  logIn(){
    this.model = this.loginForm.value;
    if(this.loginForm.valid){
      this.loginService.logIn(this.model).subscribe(
        data => {
          let getMsg = [];
          getMsg.push(data);
          console.log(data)
          if(getMsg[0].success === 1){
            let loginData = [getMsg[0].token, getMsg[0].data.id, getMsg[0].data.roll, getMsg[0].data.name];
            localStorage.setItem('token', JSON.stringify(loginData));
            let getData = JSON.parse(localStorage.getItem("token"));
            let getNameFromData = getData[getData.length-1];
            this.auth.getLoginName(getNameFromData);
            this.router.navigateByUrl('/account/dashboard');
          }
        }
      );
    }
  }
}
