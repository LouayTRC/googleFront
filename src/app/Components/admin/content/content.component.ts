import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Services/department.service';
import { WorkService } from 'src/app/Services/work.service';
import { Department } from 'src/app/models/department';
import { Work } from 'src/app/models/work';
// import { PasswordPopupComponent } from '../../popups/pop_ups/password-popup/password-popup.component';
// import { ScorecardPopupComponent } from '../../popups/pop_ups/scorecard-popup/scorecard-popup.component';
// import { SignoutPopupComponent } from '../../popups/pop_ups/signout-popup/signout-popup.component';
// import { AddPopupComponent } from '../../popups/shared_popups/add-popup/add-popup.component';
// import { Departement } from 'src/app/models/departement';
// import { DepartService } from 'src/app/services/depart.service';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  memberFilter:string=""
  departfilter:string="all"
  works!:Work[]
  filtredWorks!:Work[]
  departs!:Department[]
  headers!:HttpHeaders
  constructor(private wService:WorkService,private dService:DepartmentService){}

  ngOnInit(){
    this.dService.getDepartments().subscribe((res)=>{
      this.departs=res
    })
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.wService.getAllWorks(this.headers).subscribe((res)=>{
      this.works=res
      this.filtredWorks=structuredClone(this.works)
      console.log("works",res);
    })
  }
  filterByDepart(aa:String){
    console.log("zzz",aa);
    this.filtredWorks=this.works
    if (this.memberFilter!="") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberFilter.toUpperCase()))
    }
    if (aa!="all") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.department.name==aa)
    }
    else{
      this.departfilter='all'
    }
    
  }

  filterByMember(){
    this.filtredWorks=this.works
    if(this.departfilter!="all"){
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.department.name==this.departfilter)

    }
    if (this.memberFilter!="") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberFilter.toUpperCase()))
      
    }

  }


}
