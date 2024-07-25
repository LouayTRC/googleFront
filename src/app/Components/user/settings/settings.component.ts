import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { MemberService } from 'src/app/services/member.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settingsForm!: FormGroup
  currentUser!: Member
  headers!:HttpHeaders
  constructor(private mservice: MemberService, private formBuilder: FormBuilder, private uservice: UsersService, private active: ActivatedRoute,private router:Router) { }
  ngOnInit() {

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.settingsForm = this.formBuilder.nonNullable.group({
      fullname: [""],
      username: [""],
      mail: [""],
      password: [""]
    })
    this.active.parent?.params.subscribe(params => {
      const id=params["id"];
      console.log("id",id);
      this.mservice.getMemberById(id).subscribe((res) => {
        this.currentUser = res
        console.log("lena=", this.currentUser)
      })
    })
  }
  editProfile() {
    this.currentUser.fullname = this.settingsForm.value.fullname
    this.currentUser.username = this.settingsForm.value.username
    this.currentUser.mail = this.settingsForm.value.mail
    this.currentUser.password = this.settingsForm.value.password
    this.mservice.updateMember(this.currentUser).subscribe((res)=>{
      console.log("res",res);
      this.router.navigate(['/user',this.currentUser.id])
    })
  }


}
