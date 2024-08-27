import { DialogRef } from '@angular/cdk/dialog';
import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrls: ['./password-popup.component.css']
})
export class PasswordPopupComponent {
  passwordChange!: FormGroup
  headers!: HttpHeaders
  constructor(private fb: FormBuilder, private matDialog: DialogRef, private authService: AuthService) { }
  ngOnInit() {
    const token = sessionStorage.getItem('token')
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.passwordChange = this.fb.nonNullable.group({
      oldPwd: '',
      newPwd: '',
      newPwd2: ''
    })
  }

  checkFields() {
    if (this.passwordChange.value.oldPwd != "" && this.passwordChange.value.newPwd != "" && this.passwordChange.value.newPwd2 != "") {
      if (this.passwordChange.value.newPwd == this.passwordChange.value.newPwd2) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }

  }
  updateAdmin() {
    console.log("dd", this.passwordChange.value);

    this.authService.changePassword(this.passwordChange.value.oldPwd, this.passwordChange.value.newPwd, this.headers).subscribe((res) => {
      console.log("res", res);
      this.matDialog.close()
    })


  }
}
