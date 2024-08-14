import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/app/models/member';
import { Admin } from 'src/app/models/admin';
import { UserHomeComponent } from 'src/app/Components/user/user-home/user-home.component';
import { UserService } from 'src/app/Services/user.service';
import { HttpHeaders } from '@angular/common/http';
import { AddAdminComponent } from '../../add-admin/add-admin.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  // departs!:Departement[]
  admins!:Admin[]
  headers!:HttpHeaders
  members!:Member[]
  // constructor(private dialogRef: MatDialog,private dService:DepartService,private aService:AdminService){}
  constructor(private uService:UserService,private dialogRef:MatDialog){}
  ngOnInit(){
  //   this.dService.getAllDeparts().subscribe((res)=>{
  //     this.departs=res;
  //   });
  const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.uService.getAllAdmins(this.headers).subscribe((res)=>{
      this.admins=res
      console.log("admins",this.admins);
      
    })

    this.uService.getAllMembers(this.headers).subscribe((res)=>{
      this.members=res
      console.log("members",this.members);
    })
  }
  miseajour(m:any){
  //   for (let i = 0; i < this.departs.length; i++) {
  //     this.departs[i].members=this.departs[i].members.filter(element=>element.id!=m.id)
  //   }
  }
  update(a:any){
  //   console.log("aa",a);
  //   for (let i = 0; i < this.departs.length; i++) {
  //     this.departs[i].members=this.departs[i].members.filter(element=>element.id!=a.id)
  //   }
  //   this.admins.push(a)
  //   console.log("admins 2",this.admins);
    
  }

  openAddAdmin() {
    this.dialogRef.open(AddAdminComponent).afterClosed().subscribe(item => this.admins.push(item))
  }
}
