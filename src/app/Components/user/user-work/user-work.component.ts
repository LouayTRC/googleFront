import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { Work } from 'src/app/models/work';
import { TaskService } from 'src/app/services/Task.service';
import { WorkService } from 'src/app/Services/work.service';

@Component({
  selector: 'app-user-work',
  templateUrl: './user-work.component.html',
  styleUrls: ['./user-work.component.css']
})
export class UserWorkComponent {
  // constructor(,private mservice:MemberService,private depoService:DepoService){}
  // currentAssignment!:Task
  // user!:Member
  work!:Work
  headers!:HttpHeaders
  constructor(private active:ActivatedRoute,private wservice:WorkService,private router:Router){}
  ngOnInit(){

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const workId=this.active.snapshot.params['aid'];
    this.wservice.getWorkById(workId,this.headers).subscribe((res)=>{
      this.work=res
      console.log('assignment',this.work);
    })

  }
  submitWork(){
    console.log("current work",this.work);
    
    this.wservice.submitWork(this.work.id,this.work.url,this.headers).subscribe((res)=>{
      console.log("work added",res);
      if (res) {
        this.router.navigate(["/home"])
      }
      
    })
  }

}
