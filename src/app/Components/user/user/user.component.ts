import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
// import { MemberService } from 'src/app/services/member.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  // connectedUser!: Member;
  // constructor(private active:ActivatedRoute,private mservice:MemberService){}
  // ngOnInit(){
  //   const connectedUserId=this.active.snapshot.params['id'];
  //   this.mservice.getMemberById(connectedUserId).subscribe((res)=>{
  //     this.connectedUser=res
  //     console.log("f west=",this.connectedUser)
  //   })
  // }
}
