import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  user!: User
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.user.subscribe((res)=>{
      this.user=res
      console.log("user header",this.user);
      

    })
  }

}
