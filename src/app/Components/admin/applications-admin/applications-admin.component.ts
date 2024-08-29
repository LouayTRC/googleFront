import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/Services/application.service';

@Component({
  selector: 'app-applications-admin',
  templateUrl: './applications-admin.component.html',
  styleUrls: ['./applications-admin.component.css']
})
export class ApplicationsAdminComponent {
  filterStatus!:number
  filtredApplications!:Application[]
  applications!:Application[]
  headers!:HttpHeaders
  constructor(private aService:ApplicationService){}
  ngOnInit(){
    
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.aService.getApplications(this.headers).subscribe((res=>{
      this.applications=res;
      this.filtredApplications=structuredClone(this.applications)
      console.log("candidats",this.applications);
      
    }))
  }
  filterByStatus(status:number){
    if (this.filterStatus==status) {
      this.filterStatus=3
      this.filtredApplications=this.applications
    }
    else{
      this.filterStatus=status
      this.filtredApplications=this.applications.filter(elem=>elem.status==status)
    }
    
  }
}
