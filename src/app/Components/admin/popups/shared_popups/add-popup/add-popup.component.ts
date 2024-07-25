import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
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
  // url: string = ""
  // file!:File
  // constructor(, , ,,private fireStorage:AngularFireStorage) { }
  constructor(private dialogRef: MatDialogRef<AddPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dService: DepartmentService, private formBuilder: FormBuilder, private tservice: TaskService, private eservice: EventService) { }
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
        description: ["", Validators.required]
      })
      console.log("event", this.newEvent.value);
    }
    else {
      this.newTask = this.formBuilder.nonNullable.group({
        title: ["", Validators.required],
        ddl: ["", Validators.required],
        department: ["", Validators.required],
        description: ["", Validators.required]
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

  addTask() {
    //   if (this.file) {
    //     const path = `tasks/${this.file.name}`
    //     this.fireStorage.upload(path,this.file).then(data => {
    //       const uploadUser = data;
    //       uploadUser.ref.getDownloadURL().then(data2 => {
    //         this.newTask.value.pic=data2
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
    //   }
  }


  fileChange(event: any) {
    // this.file = event.target.files[0];
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
