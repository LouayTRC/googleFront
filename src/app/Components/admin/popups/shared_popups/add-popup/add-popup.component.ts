import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Services/department.service';
import { EventService } from 'src/app/Services/event.service';
import { Department } from 'src/app/models/department';
import { TaskService } from 'src/app/services/Task.service';


// import { TaskService } from 'src/app/services/Task.service';
// import { DepartService } from 'src/app/services/depart.service';
// import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent {
  newEvent!: FormGroup;
  newTask!: FormGroup;
  departs!: Department[];
  eventDeps: Department[] = []
  headers!:HttpHeaders
  file!:File
  constructor(private dialogRef: MatDialogRef<AddPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dService: DepartmentService, private formBuilder: FormBuilder, private tservice: TaskService, private eservice: EventService,private fireStorage:AngularFireStorage) { }
  ngOnInit() {

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });


    console.log("data open popup", this.data);
    this.dService.getDepartments(this.headers).subscribe((res) => {
      this.departs = res
    })
    if (this.data.ComponentName == "events") {
      this.newEvent = this.formBuilder.nonNullable.group({
        title: ["", Validators.required],
        dateEvent: ["", Validators.required],
        place: ["", Validators.required],
        description: ["", Validators.required],
        pic:"assets/images/logo.png"
      })
      console.log("event", this.newEvent.value);
    }
    else {
      this.newTask = this.formBuilder.nonNullable.group({
        title: ["", Validators.required],
        ddl: ["", Validators.required],
        department: ["", Validators.required],
        description: ["", Validators.required],
        pic:"assets/images/logo.png"
      })
      console.log("task", this.newTask.value);
    }
  }
  get Title() {
    return this.newTask.controls['title']
  }
  get ddl() {
    return this.newTask.controls['ddl']
  }
  get Tdescription() {
    return this.newTask.controls['description']
  }
  get TitleE() {
    return this.newEvent.controls['title']
  }
  get DateEvent() {
    return this.newEvent.controls['dateEvent']
  }
  get Place() {
    return this.newEvent.controls['place']
  }
  get Edescription() {
    return this.newEvent.controls['description']
  }
  addEvent() {
    // if (this.file) {
    //   const path = `events/${this.file.name}`
    //   this.fireStorage.upload(path,this.file).then(data => {
    //     const uploadUser = data;
    //     uploadUser.ref.getDownloadURL().then(data2 => {
    //       this.newEvent.value.pic=data2
    if (this.eventDeps.length != 0) {
      this.newEvent.value.departments = this.eventDeps
      this.eservice.addEvent(this.newEvent.value,this.headers).subscribe((res) => {
        console.log("added event", res);
        this.dialogRef.close(res)
      })
    }

    //     });
    //   });
    // }
    // else{
    //   alert('choisissez une photo')
    // }
  }

  async addTask() {
      if (this.file && this.data.ComponentName == "tasks") {
        this.newTask.value.pic=await this.uploadPic(this.file)
      }
    console.log("deop", this.newTask.value.department);
    this.newTask.value.department = this.findDepartment(this.newTask.value.department)
    this.tservice.addTask(this.newTask.value,this.headers).subscribe((res) => {
      console.log("added task", res);
      this.dialogRef.close(res)
    })
    //       });
    //     });
    //   }
    //   else{
    //     alert('choisissez une photo')
      
  }


  onFileChange(event: any) {
    this.file = event.target.files[0];
    console.log("dd", this.file);
  }
  async uploadPic(f: File) {
    let path;
    if(this.data.ComponentName == "events"){
      path = `events/${this.file.name}`
    }
    else{
      path = `tasks/${this.file.name}`
    }
    
    const upload = await this.fireStorage.upload(path, this.file)
    const url = await upload.ref.getDownloadURL()
    return url;
  }
  
  findDepartment(id: number) {
    for (let dep of this.departs) {
      if (dep.id == id) {
        return dep;
      }
    }
    return null;
  }

  addEventDep(id: number) {
    let dep = this.findDepartment(id);
    if (dep) {
      let i = this.eventDeps.indexOf(dep)
      if (i == -1) {
        this.eventDeps.push(dep)
      } else {
        this.eventDeps.splice(i, 1)
      }
    }
    console.log("event deps",this.eventDeps);
    
  }
}
