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
  works!:Work[]
  departs!:Department[]
  departs2!:Department[]
  headers!:HttpHeaders
  constructor(private wService:WorkService,private dService:DepartmentService){}

  ngOnInit(){
    // this.dService.getDepartments().subscribe((res)=>{
    //   this.departs=res
    // })
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.wService.getAllWorks(this.headers).subscribe((res)=>{
      this.works=res
      console.log("works",res);
    })
  }
  // filtrer(aa:any){
  //   console.log("zzz",aa.value);
    
  //   if (aa.value=="both") {
  //     this.departs=this.departs2
  //     console.log("this",this.departs);
      
  //   }
  //   else {
  //     this.departs=this.departs2
  //     this.departs=this.departs.filter((element)=>element.name==aa.value)
  //     console.log("trah",this.departs);
      
  //   }
  // }
}
