import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Services/department.service';
import { Task } from 'src/app/models/Task';

import { AddPopupComponent } from '../popups/shared_popups/add-popup/add-popup.component';
import { TaskService } from 'src/app/services/Task.service';
import { HttpHeaders } from '@angular/common/http';
// import { TaskService } from 'src/app/services/Task.service';


// import { PasswordPopupComponent } from '../../popups/pop_ups/password-popup/password-popup.component';
// import { ScorecardPopupComponent } from '../../popups/pop_ups/scorecard-popup/scorecard-popup.component';
// import { SignoutPopupComponent } from '../../popups/pop_ups/signout-popup/signout-popup.component';
// import { AddPopupComponent } from '../../popups/shared_popups/add-popup/add-popup.component';
// import { DepartService } from 'src/app/services/depart.service';
// import { Task } from 'src/app/models/Task';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent {
  headers!:HttpHeaders
  tasks: Task[]=[]
  constructor(private dialogRef: MatDialog, private tservice: TaskService) {

  }
  ngOnInit() {
    

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.tservice.getTasks(this.headers).subscribe((res) => {
      console.log("res",res);
      
      this.tasks = res;
    })
  }

  openAddPopup() {
    this.dialogRef.open(AddPopupComponent, {
      data: { ComponentName: "tasks" }
    }).afterClosed().subscribe(item => this.tasks.push(item))
  }
  suppression(aa:Task){
  //   for (let i = 0; i < this.departs.length; i++) {
  //     this.departs[i].tasks=this.departs[i].tasks.filter((element:Task)=>element.id!=aa.id)
  //   }
  }
  miseAJour(aa:Task){
  //   for (let i = 0; i < this.departs.length; i++) {
  //     for (let j = 0; j < this.departs[i].tasks.length; j++) {
  //       if(this.departs[i].tasks[j]==aa){
  //         this.departs[i].tasks[j]=aa;
  //       }
  //     }
  //   }
  }
}
