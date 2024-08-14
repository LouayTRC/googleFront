import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Member } from 'src/app/models/member';
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member!: Member;
  @Input() admin!: Admin;
  // @Input() depart!: string;
  // @Output() suppression=new EventEmitter<Member>
  // @Output() ajoutAdmin=new EventEmitter<Admin>

  // newAdmin!:Admin

  // constructor(private mservice:MemberService,private aService:AdminService){}
  // ngOnInit(){
  //   console.log("member",this.member);
    
  // }
  deleteMember(id:number){
  //   this.mservice.deleteMember(id).subscribe(()=>{
  //     console.log("deleted");
  //     this.suppression.emit(this.member);
  //   })
  }
  activateUser(form:Member){
  //   this.newAdmin=new Admin(form.id,form.fullname,form.username,form.password,'ADMIN',form.pdp);
  //   console.log("add",this.newAdmin);
  //   this.aService.addAdmin(this.newAdmin).subscribe((res)=>{
  //     console.log("res",res);
  //     this.deleteMember(form.id);

  //     this.ajoutAdmin.emit(res)
  //   })
      
    
  }
}
