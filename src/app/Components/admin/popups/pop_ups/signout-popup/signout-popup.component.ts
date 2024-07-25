import { DialogRef } from '@angular/cdk/dialog';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signout-popup',
  templateUrl: './signout-popup.component.html',
  styleUrls: ['./signout-popup.component.css']
})
export class SignoutPopupComponent {
  constructor(private authService:AuthService,private dialogRef:MatDialog){}
  ngOnInit(){
    
  }
  logout(){
    this.authService.logout()
    this.dialogRef.closeAll()
  }
}
