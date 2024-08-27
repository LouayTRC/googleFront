import { HttpHeaders } from '@angular/common/http';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Member } from 'src/app/models/member';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() user!: User;

  headers!:HttpHeaders
  constructor(private uService:UserService){}

  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

  }
  deleteMember(id:number){
  //   this.mservice.deleteMember(id).subscribe(()=>{
  //     console.log("deleted");
  //     this.suppression.emit(this.member);
  //   })
  }
  activateUser(user:User){
    this.uService.updateStatusAccount(user.id,!user.enabled,this.headers).subscribe((res)=>{
      console.log("res",res);
      if (res.status) {
        user.enabled=!user.enabled
      }
    });
    
    
      
    
  }
  getRoles(){
    return this.user.roles.map(role => role.name).join(', ')
  }
  public hasRole(roleName: String): boolean {
    return this.user.roles.some(role => role.name === roleName);
}

}
