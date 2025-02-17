import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/Services/event.service';

import { Event } from 'src/app/models/event';
import { AddPopupComponent } from '../../popups/shared_popups/add-popup/add-popup.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-eventsadmin',
  templateUrl: './eventsadmin.component.html',
  styleUrls: ['./eventsadmin.component.css']
})
export class EventsadminComponent {
  titleFilter:string=""
  filtredEvents!:Event[]
  events!:Event[]
  headers!:HttpHeaders
  constructor(private dialogRef: MatDialog,private eservice:EventService){}
  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.eservice.getEvents(this.headers).subscribe((res)=>{
      this.events=res
      this.filtredEvents=structuredClone(this.events)
      console.log("events",this.events);
      
    })
  }
  openAddPopup(){
    this.dialogRef.open(AddPopupComponent,{
      data:{ComponentName:"events"}
    }).afterClosed().subscribe(item=>{
      this.filtredEvents.push(item)
      console.log("item",item);
      
    })
  }
  suppression(aa:Event){
    this.filtredEvents=this.filtredEvents.filter((element:Event)=>element.id!=aa.id)
  }
  miseAJour(aa:Event){
    // for (let i = 0; i < this.departs.length; i++) {
    //   for (let j = 0; j < this.departs[i].events.length; j++) {
    //     if(this.departs[i].events[j]==aa){
    //       console.log("aaass",this.departs[i].events[j]);
          
    //       this.departs[i].events[j]=aa;
    //     }
    //   }
      
    // }
  }
  filterByName(){
    if (this.titleFilter!="") {
      this.filtredEvents=this.events.filter(elem=>elem.title.toUpperCase().includes(this.titleFilter.toUpperCase()))
    } else {
      this.filtredEvents=this.events
    }
    
  }
}
