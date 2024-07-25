import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() user!: User;
  constructor(private router:Router,private authService:AuthService){}

  ngOnInit(){
    console.log("profile",this.user);
    
  }
  signout(){
    this.authService.logout();
  }

}
