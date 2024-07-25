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
  // departs2!: Departement[]
  user!:User
  works!:Work[]
  // user!: Member
  textSearch:string=""
  headers!:HttpHeaders
  // filtre:string="both"
  // constructor(, private active: ActivatedRoute, private router: Router, private mservice: MemberService) { }
  constructor(private authService:AuthService,private wSerivce:WorkService){}
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
    })

    // this.dservice.getDepartments().subscribe((res) => {
    //   this.departs = res
    //   // this.departs2 = res
    //   console.log("asseee", this.departs);
    //   this.tservice.getTasks().subscribe((res)=>{
    //     this.tasks=res
    //   })
    // })


  }

  filtrer(aa: any) {
    // console.log("zzz", aa.value);
    // this.filtre=aa.value
    // if (aa.value == "both") {
    //   this.departs = structuredClone(this.departs2)
    //   console.log("this", this.departs);
    //   for (let i = 0; i < this.departs.length; i++) {
    //     this.departs[i].tasks = this.departs[i].tasks.filter(element => element.title.includes(this.textSerach))
    //   }
    // }
    // else {
    //   this.departs = structuredClone(this.departs2)
    //   this.departs = this.departs.filter((element) => element.name == aa.value)
    //   for (let i = 0; i < this.departs.length; i++) {
    //     this.departs[i].tasks = this.departs[i].tasks.filter(element => element.title.includes(this.textSerach))
    //   }
    //   console.log("trah", this.departs);

    // }
  }

  onKeypressEvent(event: any) {

    // console.log(this.textSerach);
    // console.log("departs",this.departs);
    // console.log("departs2",this.departs2);
    // if (this.textSerach == "") {
    //   this.departs = structuredClone(this.departs2);
    // }
    // if (this.filtre=="both") {
    //   this.departs = structuredClone(this.departs2);
    // }
    // else{
    //   this.departs = structuredClone(this.departs.filter((element) => element.name == this.filtre))
    // }
    // for (let i = 0; i < this.departs.length; i++) {
    //   this.departs[i].tasks = this.departs[i].tasks.filter(element => element.title.includes(this.textSerach))
    // }
    
    
  }
}
