import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from '../shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from '../shared_popups/details-popup/details-popup.component';
import { Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { Event } from 'src/app/models/event';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/Services/application.service';
import { HttpHeaders } from '@angular/common/http';
// import { Application } from 'src/app/models/application';


@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent {
  headers!:HttpHeaders
  @Input() event!: Event;
  @Input() task!:Task;
  @Input() app!:Application;
  @Output() delete=new EventEmitter()
  @Output() update=new EventEmitter()
  @Output() updateApplica=new EventEmitter()
  constructor(private dialogRef: MatDialog,private appService:ApplicationService){

  }
  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log("ee",this.event);
    console.log("tt",this.task);
  }
  openDeletePopup(ident:number,name:string){
    this.dialogRef.open(DeletePopupComponent,{
      data:{componentName:name,id:ident}
    }).afterClosed().subscribe(res=>{
      console.log("result",res);
      this.delete.emit(res);
    })
  }
  openModifyPopup(ident:number,name:string){
    this.dialogRef.open(ModifyPopupComponent,{
      data:{componentName:name,id:ident}
    }).afterClosed().subscribe(res=>{
      console.log("res",res);
      console.log("control",this.event);
      if (res!=null) {
        if (this.event!=undefined) {
          this.event=res
        } else {
          this.task=res
        }
      }
      
      this.update.emit(res)
    })
  }
  openDetailsPopup(ident:number,name:string){
    this.dialogRef.open(DetailsPopupComponent,{
      data:{componentName:name,id:ident}
    });
  }
  updateApplication(a:Application,status:number){
    this.appService.updateStatus(a.id,status,this.headers).subscribe((res)=>{
      if(res){
        a.status=status
      }
      else{
        console.log("error");
        
      }
    })
  }
}
