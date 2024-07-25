import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberEvent } from 'src/app/models/member-event';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent {
  membersEvent !:MemberEvent[]
  headers!:HttpHeaders
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private eService:EventService){}

  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log("dd",this.data);
    this.eService.getPresence(this.data.id,this.headers).subscribe((res)=>{
      console.log("members event :",res);
      
    })

  }
}
