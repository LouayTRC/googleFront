import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Department } from 'src/app/models/department';
import { AuthService } from 'src/app/Services/auth.service';
import { DepartmentService } from 'src/app/Services/department.service';
// import { Router } from '@angular/router';
// import { Departement } from 'src/app/models/departement';
// import { DepartService } from 'src/app/services/depart.service';
// import { MemberService } from 'src/app/services/member.service';
// import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup
  departs!: Department[]
  selectedDeparts: Department[] = []
  file!: File
  // url: string = ""
  // constructor(, private Mservices: MemberService, private route: Router, private dialogRef: MatDialog, , private fireStorage: AngularFireStorage) { }

  constructor(private dService: DepartmentService, private fb: FormBuilder, private authService: AuthService, private fireStorage: AngularFireStorage) { }

  ngOnInit() {
    this.dService.getDepartments().subscribe((res) => {
      this.departs = res
      console.log("des", this.departs);

    })
    this.registerForm = this.fb.nonNullable.group({
      fullname: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      mail: ["", Validators.required],
      cin: ["", [Validators.required, Validators.min(11111111), Validators.max(99999999)]],
      phone: ["", [Validators.required, Validators.min(11111111), Validators.max(99999999)]],
      birthday: ["", Validators.required]
    })

  }

  get Fullname() {
    return this.registerForm.get('fullname')
  }
  get Username() {
    return this.registerForm.get('username')
  }
  get Pwd() {
    return this.registerForm.get('password')
  }
  get Mail() {
    return this.registerForm.get('mail')
  }
  get CIN() {
    return this.registerForm.get('cin')
  }
  get Phone() {
    return this.registerForm.get('phone')
  }
  get bday() {
    return this.registerForm.get('birthday')
  }
  async register() {
    if (this.file) {
      this.registerForm.value.pdp = await this.uploadPic(this.file);
    }
    else {
      this.registerForm.value.pdp = "assets/images/new.png"
    }
    this.registerForm.value.departments = this.selectedDeparts
    console.log("register form", this.registerForm.value);

    this.authService.register(this.registerForm.value).subscribe((res) => {
      console.log("added member", res);
    })

  }


  selectDepart(depart: Department) {
    let p = this.selectedDeparts.indexOf(depart);

    if (p == -1) {
      this.selectedDeparts.push(depart);
    }
    else {
      this.selectedDeparts.splice(p, 1)
    }
    console.log("selected", this.selectedDeparts);

  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    console.log("dd", this.file);
  }
  async uploadPic(f: File) {
    const path = `users/${this.file.name}`
    const upload = await this.fireStorage.upload(path, this.file)
    const url = await upload.ref.getDownloadURL()
    return url;
  }
}


