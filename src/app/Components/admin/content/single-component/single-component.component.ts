import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { WorkService } from 'src/app/Services/work.service';
import { Member } from 'src/app/models/member';
import { Work } from 'src/app/models/work';


@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent {
  
  @Input() work!:Work
  headers!:HttpHeaders
  constructor(private wService:WorkService){}

  ngOnInit(){
    console.log("work single",this.work);
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  updateNote(){
    this.wService.updateNote(this.work.id,this.work.note,this.headers).subscribe((res)=>{
      console.log("note updated",res);
      
    })
  }
}
