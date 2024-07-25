import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { every } from 'rxjs';
import { DepartmentService } from 'src/app/Services/department.service';
import { EventService } from 'src/app/Services/event.service';
import { Task } from 'src/app/models/Task';
import { Department } from 'src/app/models/department';
import { Event } from 'src/app/models/event';
import { TaskService } from 'src/app/services/Task.service';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Task } from 'src/app/models/Task';
// import { Departement } from 'src/app/models/departement';
// import { Event } from 'src/app/models/event';
// import { TaskService } from 'src/app/services/Task.service';
// import { DepartService } from 'src/app/services/depart.service';
// import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-modify-popup',
  templateUrl: './modify-popup.component.html',
  styleUrls: ['./modify-popup.component.css']
})
export class ModifyPopupComponent {
  event!:Event;
  task!:Task;
  // file!:File
  departs!:Department[]
  headers!: HttpHeaders;
  // constructor(,private fireStorage:AngularFireStorage){}
  constructor(private tService:TaskService,@Inject(MAT_DIALOG_DATA) public data: any,private dialodRef:MatDialogRef<ModifyPopupComponent>,private dService:DepartmentService,private eService:EventService){}
  ngOnInit(){

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.dService.getDepartments(this.headers).subscribe((res)=>{
      this.departs=res
      if (this.data.componentName=='events') {
        this.eService.getEventById(this.data.id,this.headers).subscribe((res)=>{
          this.event=res;
          console.log("evenet",this.event);
          
        })
      } else {
        this.tService.getTaskById(this.data.id,this.headers).subscribe((res)=>{
          this.task=res;
          console.log("task update",this.task);
        })
      }
      
    })
    
  }
  updateEvent(){
    // if(this.file){
    //   const path = `events/${this.file.name}`
    //   this.fireStorage.upload(path,this.file).then(data => {
    //     const uploadUser = data;
    //     uploadUser.ref.getDownloadURL().then(data2 => {
    //       this.event.pic=data2
      this.eService.updateEvent(this.event,this.headers).subscribe((res)=>{
            console.log("event updated",res);
            this.dialodRef.close(res);
          })
    //     });
    //   });
      
    // }
    
  }
  updateTask(){
    // if(this.file){
    //   const path = `tasks/${this.file.name}`
    //   this.fireStorage.upload(path,this.file).then(data => {
    //     const uploadUser = data;
    //     uploadUser.ref.getDownloadURL().then(data2 => {
    //       this.task.pic=data2
          this.tService.updateTask(this.task,this.headers).subscribe((res)=>{
            console.log("task updated",res);
            this.dialodRef.close(res);
          })
    //     });
    //   });
      
    // }
    
  }
  fileChange(event: any) {
    // this.file = event.target.files[0];
  }

  findDepartment(id:number){
    for(let dep of this.departs){
      if (dep.id==id) {
        return dep;
      }
    }
    return this.task.department;
  }
}
