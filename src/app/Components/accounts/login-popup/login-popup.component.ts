import { Component, OnInit, TemplateRef } from '@angular/core';

import { Router } from '@angular/router';

// import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
// import { UsersService } from 'src/app/services/users.service';
// import { RegisterComponent } from '../register/register.component';
// import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})

export class LoginPopupComponent{
  loginForm!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private dialogRef: MatDialog,private authService:AuthService){}


  
  ngOnInit() {
    this.loginForm=this.fb.nonNullable.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }

  get Username(){
    return this.loginForm.controls['username'];
  }
  get mdp(){
    return this.loginForm.controls['password'];
  }
  login(){
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log("res login",res);
      this.authService.setUser(res.user);
      sessionStorage.setItem("token",res.token);
    })
  }
  changePop(){
    this.dialogRef.closeAll()
    this.dialogRef.open(RegisterComponent);
  }
}
