import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  // settingsForm!: FormGroup
  passwordChange!:FormGroup
  user!:User
  headers!:HttpHeaders
  constructor(private authService:AuthService,private fb:FormBuilder,private router:Router){}
  // constructor(private mservice: MemberService, private formBuilder: FormBuilder, private uservice: UsersService, private active: ActivatedRoute,private router:Router) { }
  ngOnInit() {

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.authService.user.subscribe((res)=>{
      this.user=res
      console.log(this.user);
      
    })
    this.passwordChange=this.fb.nonNullable.group({
      oldPwd:'',
      newPwd:'',
      newPwd2:''
    })
    
  }
  checkFields(){
    if (this.passwordChange.value.oldPwd!="" && this.passwordChange.value.newPwd!="" && this.passwordChange.value.newPwd2!="") {
      if(this.passwordChange.value.newPwd==this.passwordChange.value.newPwd2){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return true;
    }
    
  }
  changePassword() {


 this.authService.changePassword(this.passwordChange.value.oldPwd, this.passwordChange.value.newPwd, this.headers).subscribe((res) => {
      console.log("res", res);
      if(res){

        this.router.navigate(["/member"])
      }
    })
  }


}
