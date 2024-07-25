import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MatDialog } from '@angular/material/dialog';
import { PointsPopupComponent } from './points/points-popup/points-popup.component';
import { Event } from 'src/app/models/event';
import { Task } from 'src/app/models/Task';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { TaskService } from 'src/app/services/Task.service';
import { HttpHeaders } from '@angular/common/http';
import { WorkService } from 'src/app/Services/work.service';
import { Work } from 'src/app/models/work';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  // currentUser!:Member
  // members!:Member[]
  // // lastScores:any
  works:Work[]=[]
  headers!:HttpHeaders
  events!:Event[]
  user!:User
  leaderBoard!:Member[]
  // constructor(,private mservice:MemberService,private aroute:ActivatedRoute){}
  constructor(private tservice:TaskService,private eservice:EventService,private aService:AuthService,private dialogRef: MatDialog,private uService:UserService,private wService:WorkService){}
  ngOnInit(){
  //   this.aroute.parent?.params.subscribe(params => {
  //     const id=params["id"];
  //     console.log("id",id);
  //     this.mservice.getMemberById(id).subscribe((res)=>{
  //       this.currentUser=res
  //       console.log("user",this.currentUser);
        
  //     })
  //  });
  const token=sessionStorage.getItem('token')
  this.headers=new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

    this.uService.getLeaderBoard(this.headers).subscribe((res)=>{
      this.leaderBoard=res
      console.log("baad tri",this.leaderBoard);
    })
    this.aService.user.subscribe((red)=>{
      this.user=red

    })
    this.wService.getWorksByMember(this.headers).subscribe((res)=>{
      this.works=res
      console.log("active",this.works);
    })
    this.eservice.getEvents(this.headers).subscribe((res)=>{
      this.events=res
      console.log("active evvents",this.events);
      
    })
    
  }
  openPointspopup(){
    this.dialogRef.open(PointsPopupComponent,{
      data:{user:this.user}
    });
  }
}
