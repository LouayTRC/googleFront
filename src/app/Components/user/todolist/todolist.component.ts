import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { WorkService } from 'src/app/Services/work.service';
import { Task } from 'src/app/models/Task';
import { Department } from 'src/app/models/department';
import { User } from 'src/app/models/user';
import { Work } from 'src/app/models/work';
import { TaskService } from 'src/app/services/Task.service';
// import { Departement } from 'src/app/models/departement';
// import { Member } from 'src/app/models/member';
// import { TaskService } from 'src/app/services/Task.service';
// import { DepartService } from 'src/app/services/depart.service';
// import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  departs!: Department[]
  user!:User
  works!:Work[]
  filtredWorks!:Work[]
  taskFilter:string=""
  departfilter:string="all"
  headers!:HttpHeaders
  constructor(private authService:AuthService,private wSerivce:WorkService,private router:Router){}
  ngOnInit() {
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.authService.user.subscribe((res)=>{
      this.user=res
      console.log("user",this.user);
      
    })

    this.wSerivce.getWorksByMember(this.headers).subscribe((res)=>{
      this.works=res
      this.filtredWorks=structuredClone(this.works)
    })

  }

  filterByDepart(aa:String){
    console.log("zzz",aa);
    this.filtredWorks=this.works
    if (this.taskFilter!="") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.title.toUpperCase().includes(this.taskFilter.toUpperCase()))
    }
    if (aa!="all") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.department?.name==aa)
    }
    else{
      this.departfilter='all'
    }
    
  }

  filterByTask(){
    this.filtredWorks=this.works
    if(this.departfilter!="all"){
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.department?.name==this.departfilter)

    }
    if (this.taskFilter!="") {
      this.filtredWorks=this.filtredWorks.filter(elem=>elem.task.title.toUpperCase().includes(this.taskFilter.toUpperCase()))
      
    }

  }

  goHome(){
    this.router.navigate(['/member/home'])
  }
}
