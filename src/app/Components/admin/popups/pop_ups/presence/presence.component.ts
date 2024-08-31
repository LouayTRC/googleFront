import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private eService:EventService,private matDialog:MatDialog){}

  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log("dd",this.data);
    this.eService.getPresence(this.data.id,this.headers).subscribe((res)=>{
      console.log("members event :",res);
      this.membersEvent=res
    })

  }

  updatePresence(t:MemberEvent){
    this.eService.updatePresence(t.id,!t.present,this.headers).subscribe((res)=>{
      console.log("ip",res);
      t.present=!t.present
      t.updatedAt=res.updatedAt
      t.updatedBy=res.updatedBy
    })
  }
  closePopup(){
    this.matDialog.closeAll()
  }
}
