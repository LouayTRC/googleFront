import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Admin } from 'src/app/models/admin';
import { ActivatedRoute } from '@angular/router';
import { SignoutPopupComponent } from '../popups/pop_ups/signout-popup/signout-popup.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // constructor( private acroute: ActivatedRoute, private aService: AdminService) { }
  constructor(private dialogRef: MatDialog ){}

  ngOnInit() {
  //   const id = this.acroute.snapshot.params['adminid'];
    
    
  //   this.aService.getAdminById(id).subscribe((res) => {
  //     this.admin = res

      
  //   })
  }

  openPasswordPopup() {
    // this.dialogRef.open(PasswordPopupComponent,
    //   { data: { admin: this.admin } }
    // );
  }
  openSignoutPopup() {
    this.dialogRef.open(SignoutPopupComponent);
  }
}
