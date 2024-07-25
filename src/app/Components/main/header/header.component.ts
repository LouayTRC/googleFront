import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../../accounts/login-popup/login-popup.component';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { retry } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!:User

  constructor(private dialogRef: MatDialog,private authService:AuthService){}

  ngOnInit(){
    this.authService.user.subscribe((res)=>{
      this.user=res
      console.log("user header",this.user);
      
    })
  }

  openLoginPopup(){
    this.dialogRef.open(LoginPopupComponent);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  logout(){
    this.authService.logout();
  }

  hasRole(name:string){
    return this.user.roles.some((role) => role.name === name);
  }
}
