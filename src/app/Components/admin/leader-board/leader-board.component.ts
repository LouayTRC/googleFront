import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent {
  members!:Member[]
  headers!:HttpHeaders
  constructor(private uService:UserService){}
  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.uService.getLeaderBoard(this.headers).subscribe((res)=>{
      this.members=res;
    })
  }
}
