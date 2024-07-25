import { DialogRef } from '@angular/cdk/dialog';
import { HttpHeaders } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrls: ['./password-popup.component.css']
})
export class PasswordPopupComponent {
  passwordChange!:FormGroup
  headers!:HttpHeaders
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private aservice:AdminService,private matDialog:DialogRef){}
  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.passwordChange=this.fb.nonNullable.group({
      pwd:'',
      newPwd:''
    })
  }
  updateAdmin(){
    if (this.passwordChange.value.pwd==this.data.admin.password) {
      this.data.admin.password=this.passwordChange.value.newPwd;
      this.aservice.updateAdmin(this.data.admin).subscribe((res)=>{
        this.matDialog.close();
        
      })
      
    }
  }
}
