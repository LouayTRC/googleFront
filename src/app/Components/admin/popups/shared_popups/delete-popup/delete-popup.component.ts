import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/Services/event.service';
import { Task } from 'src/app/models/Task';
import { Event } from 'src/app/models/event';
import { TaskService } from 'src/app/services/Task.service';
// import { TaskService } from 'src/app/services/Task.service';
// import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  event!:Event;
  task!:Task;
  headers!:HttpHeaders
  // constructor(,){}
  constructor(public tService:TaskService,private dialogRef: MatDialogRef <DeletePopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any,public eService:EventService){}
  ngOnInit(){
    console.log("data",this.data);
    
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    if (this.data.componentName=="events") {
      this.eService.getEventById(this.data.id,this.headers).subscribe((res)=>{
        this.event=res;
        console.log("eeeeee",this.event);
        
      })
    } else {
      this.tService.getTaskById(this.data.id,this.headers).subscribe((res)=>{
        this.task=res;
        console.log("tttt",this.task);
        
      })
    }
  }
  deleteTask(){
    this.tService.deleteTask(this.task.id,this.headers).subscribe(()=>{
      console.log("deleted");
      this.dialogRef.close(this.task)
    });
  }
  deleteEvent(){
    this.eService.deleteEvent(this.event.id,this.headers).subscribe(()=>{
      console.log("deleted");
      this.dialogRef.close(this.event)
    });
  }
}
