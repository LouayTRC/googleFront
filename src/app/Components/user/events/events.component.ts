import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { Event } from 'src/app/models/event';
import { Member } from 'src/app/models/member';
// import { EventService } from 'src/app/services/event.service';
// import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events!:Event[]
  headers!:HttpHeaders
  // month!:number
  // day!:number
  // constructor(private mservice:MemberService,private active:ActivatedRoute,){}
  constructor(private eservice:EventService){}
  ngOnInit(){
    // this.month=new Date().getMonth();
    // this.day=new Date().getDate();
    // this.active.parent?.params.subscribe(params => {
    //   const id = params["id"];
    //   console.log("id", id);
    //   this.mservice.getMemberById(id).subscribe((res) => {
    //     this.connectedUser = res
    //     console.log("user", this.connectedUser);

    //   })
    // });

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.eservice.getEvents(this.headers).subscribe((res)=>{
      this.events=res
      this.updateStatue(this.events);
      console.log("this events",this.events);
    });
  }
  updateStatue(events:Event[]){
    // for (let i = 0; i < events.length; i++) {
    //   let eventMonth=parseInt(events[i].dateEvent.substring(events[i].dateEvent.indexOf('-')+1,events[i].dateEvent.lastIndexOf('-')))-1;
    //   let eventDay=parseInt(events[i].dateEvent.substring(events[i].dateEvent.length-2,events[i].dateEvent.length));
    //   console.log('e1',eventMonth);
    //   console.log('e2',this.month);
    //   console.log("trah",eventMonth==this.month && eventDay<this.day);
      
    //   if((eventMonth<this.month || (eventMonth==this.month && eventDay<this.day) )&& events[i].statue==true){
    //     console.log("aa");
        
    //     events[i].statue=false
    //     this.eservice.updateEvent(events[i].id,events[i]).subscribe((res)=>{
    //       console.log("result",res);
          
    //     })
    //   }
      
    // }
    
    
  }
}
