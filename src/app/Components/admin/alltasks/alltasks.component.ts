import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/Task';

import { AddPopupComponent } from '../popups/shared_popups/add-popup/add-popup.component';
import { TaskService } from 'src/app/services/Task.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent {
  titleFilter:string=""

  headers!: HttpHeaders
  tasks: Task[] = []
  filtredTasks!:Task[]
  constructor(private dialogRef: MatDialog, private tservice: TaskService) {

  }
  ngOnInit() {


    const token = sessionStorage.getItem('token')
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.tservice.getTasks(this.headers).subscribe((res) => {
      console.log("res", res);

      this.tasks = res;
      this.filtredTasks=structuredClone(this.tasks)
    })
  }

  openAddPopup() {
    this.dialogRef.open(AddPopupComponent, {
      data: { ComponentName: "tasks" }
    }).afterClosed().subscribe(item => {

      if (item) { this.filtredTasks.push(item) }
    })
  }
  suppression(aa: Task) {
    this.filtredTasks=this.filtredTasks.filter((element:Task)=>element.id!=aa.id)
  }
  miseAJour(aa: Task) {
    //   for (let i = 0; i < this.departs.length; i++) {
    //     for (let j = 0; j < this.departs[i].tasks.length; j++) {
    //       if(this.departs[i].tasks[j]==aa){
    //         this.departs[i].tasks[j]=aa;
    //       }
    //     }
    //   }
  }
  filterByName(){
    this.filtredTasks=this.tasks
    if (this.titleFilter!="") {
      this.filtredTasks=this.filtredTasks.filter(elem=>elem.title.toUpperCase().includes(this.titleFilter.toUpperCase()))
    }
  }
}
