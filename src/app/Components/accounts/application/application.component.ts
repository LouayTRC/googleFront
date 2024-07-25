import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  // appForm!:FormGroup
  // constructor(private fb:FormBuilder){}
  // ngOnInit(){
  //   this.appForm=this.fb.group({
  //     fullname:['',Validators.required],
  //     mail:['',[Validators.required,Validators.email]],
  //     depart:[''],
  //     facDepart:[''],
  //     reason:['',Validators.required],
  //     skills:['',Validators.required],
  //     clubsExperience:['',Validators.required]
  //   })
  // }
  // get Fullname(){
  //   return this.appForm.controls['fullname']
  // }
  // get Mail(){
  //   return this.appForm.controls['mail']
  // }
  // get Reason(){
  //   return this.appForm.controls['reason']
  // }
  // get Skills(){
  //   return this.appForm.controls['skills']
  // }
  // get Exp(){
  //   return this.appForm.controls['clubsExperience']
  // }
  addApplication(){
    // return this.appService.addApplication(this.appForm.value).subscribe((res)=>{
    //   console.log("res",res);
      
    // })
  }
}
