import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  members!:Member[]
  headers!:HttpHeaders
  constructor(private uService:UserService,private active:ActivatedRoute){}
  ngOnInit(){

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.uService.getLeaderBoard(this.headers).subscribe((res)=>{
      this.members=res
      console.log("zzzz",this.members);
    })

}

}
