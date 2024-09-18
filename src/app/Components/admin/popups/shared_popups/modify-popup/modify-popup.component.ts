import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
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
  file!:File
  departs!:Department[]
  headers!: HttpHeaders;
  // constructor(,private fireStorage:AngularFireStorage){}
  constructor(private tService:TaskService,@Inject(MAT_DIALOG_DATA) public data: any,private dialodRef:MatDialogRef<ModifyPopupComponent>,private dService:DepartmentService,private eService:EventService,private fireStorage:AngularFireStorage){}
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
  async updateEvent(){

    if(this.file){
      console.log("ddd");
      
      this.event.pic=await this.uploadPic(this.file)
    }
      this.eService.updateEvent(this.event,this.headers).subscribe((res)=>{
            console.log("event updated",res);
            this.dialodRef.close(res);
      })
    
  }
  async updateTask(){
    if(this.file && this.data.componentName == "tasks"){
          this.task.pic=await this.uploadPic(this.file)
    }
   let tmpTask:any={...this.task}
   delete tmpTask.department
   delete tmpTask.works

    this.tService.updateTask(tmpTask,this.headers).subscribe((res)=>{
      console.log("task updated",res);
      this.dialodRef.close(res);
      
    })
    
  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
    console.log("dd", this.file);
  }
  async uploadPic(f: File) {
    let path;
    console.log(this.data.componentName);
    
    if(this.data.componentName == "events"){
      path = `events/${this.file.name}`
    }
    else{
      path = `tasks/${this.file.name}`
    }
    
    const upload = await this.fireStorage.upload(path, this.file)
    const url = await upload.ref.getDownloadURL()
    return url;
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
