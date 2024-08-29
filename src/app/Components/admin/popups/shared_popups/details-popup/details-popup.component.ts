import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/Services/event.service';
import { Task } from 'src/app/models/Task';
import { Event } from 'src/app/models/event';
import { TaskService } from 'src/app/services/Task.service';
import { PresenceComponent } from '../../pop_ups/presence/presence.component';
import { HttpHeaders } from '@angular/common/http';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/Services/application.service';

// import { Application } from 'src/app/models/application';
// import { Event } from 'src/app/models/event';
// import { TaskService } from 'src/app/services/Task.service';
// import { ApplicationService } from 'src/app/services/application.service';
// import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent {
  event!:Event;
  task!:Task;
  headers!:HttpHeaders
  application!:Application;
  // constructor(,,private appService:ApplicationService){}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public tService:TaskService,public eService:EventService,private dialogRef:MatDialog,private appService:ApplicationService){}
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
    } 
    else if (this.data.componentName=="tasks") {
      this.tService.getTaskById(this.data.id,this.headers).subscribe((res)=>{
        this.task=res;
        console.log("tttt",this.task);
        
      })
    } 
    else {
      this.appService.getApplicationById(this.data.id,this.headers).subscribe((res)=>{
        this.application=res
      })
    }
  }

  openPresencePopup(){
    this.dialogRef.closeAll()
    this.dialogRef.open(PresenceComponent,
      {data:this.event}
    )
  }
}
