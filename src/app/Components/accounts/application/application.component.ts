import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { ApplicationService } from 'src/app/Services/application.service';
import { DepartmentService } from 'src/app/Services/department.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  appForm!:FormGroup
  constructor(private fb:FormBuilder,private appService:ApplicationService,private router:Router){}
  ngOnInit(){
    

    this.appForm=this.fb.group({
      fullname:['',Validators.required],
      mail:['',[Validators.required,Validators.email]],
      depart:[''],
      education:[''],
      reason:['',Validators.required],
      skills:['',Validators.required],
      clubsExperience:['',Validators.required]
    })

    
  }
    get Education(){
      return this.appForm.controls['education']
    }
    get Depart(){
      return this.appForm.controls['depart']
    }
    get Fullname(){
      return this.appForm.controls['fullname']
    }
    get Mail(){
      return this.appForm.controls['mail']
    }
    get Reason(){
      return this.appForm.controls['reason']
    }
    get Skills(){
      return this.appForm.controls['skills']
    }
    get Exp(){
      return this.appForm.controls['clubsExperience']
    }
  addApplication(){
    console.log("app",this.appForm.value);
    
    this.appService.addApplication(this.appForm.value).subscribe((res)=>{
      console.log("res",res);
      this.router.navigate(["/home"])
    })
  }
}
