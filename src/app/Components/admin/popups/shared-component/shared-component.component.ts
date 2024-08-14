import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from '../shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from '../shared_popups/details-popup/details-popup.component';
import { Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { Event } from 'src/app/models/event';
import { Application } from 'src/app/models/application';
// import { Application } from 'src/app/models/application';


@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent {
  @Input() event!: Event;
  @Input() task!:Task;
  @Input() candidat!:Application;
  @Output() delete=new EventEmitter()
  @Output() update=new EventEmitter()
  constructor(private dialogRef: MatDialog){

  }
  ngOnInit(){
    
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
      
      if (this.event!=undefined) {
        this.event=res
      } else {
        this.task=res
      }
      this.update.emit(res)
    })
  }
  openDetailsPopup(ident:number,name:string){
    this.dialogRef.open(DetailsPopupComponent,{
      data:{componentName:name,id:ident}
    });
  }
}
