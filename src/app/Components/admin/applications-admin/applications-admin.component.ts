import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-applications-admin',
  templateUrl: './applications-admin.component.html',
  styleUrls: ['./applications-admin.component.css']
})
export class ApplicationsAdminComponent {
  candidats!:Application[]
  headers!:HttpHeaders
  constructor(private cService:ApplicationService){}
  ngOnInit(){
    
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.cService.getAllApplications(this.headers).subscribe((res=>{
      this.candidats=res;
      console.log("candidats",this.candidats);
      
    }))
  }
}
