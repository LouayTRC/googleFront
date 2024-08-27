import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/Services/auth.service';
import { RoleService } from 'src/app/Services/role.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  roles!:Role[]
  headers!:HttpHeaders
  adminForm!:FormGroup
  selectedRoles:Role[]=[]
  constructor(private rService:RoleService,private fb:FormBuilder,private authService:AuthService,private uService:UserService){}

  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.adminForm=this.fb.group({
      username:["",Validators.required],
      fullname:["",Validators.required],
      mail:["",Validators.required,Validators.email],
      password:["",Validators.required],
      roles:[]
    })


    this.rService.getRoles(this.headers).subscribe((res)=>{
      this.roles=res
    })

    
  }

  selectRole(role:Role){
    let i=this.selectedRoles.indexOf(role)
    if (i!=-1) {
      this.selectedRoles.splice(i,1)
    } else {
      this.selectedRoles.push(role)
    }
  }

  addAdmin() {
    this.adminForm.value.roles=this.selectedRoles
    this.authService.addAdmin(this.adminForm.value,this.headers).subscribe((res)=>{
      console.log("res",res);
    })
    console.log("Admin Data:", this.adminForm.value);
    
  }
}
