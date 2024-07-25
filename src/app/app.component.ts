import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleFront';

  constructor(private authService:AuthService){}

  ngOnInit(){
    const token=sessionStorage.getItem("token")
    if (token) {
      this.authService.verifyToken(token).subscribe((res)=>{
        console.log("res",res);
        if(res.loggedIn){
          this.authService.setUser(res.user);
        }
        else{
          this.authService.logout()
        }
      })
    }
  }
}
