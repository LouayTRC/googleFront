import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailService } from 'src/app/Services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mailForm!:FormGroup

  constructor(private fb:FormBuilder,private mService:MailService){}

  ngOnInit(){
    this.mailForm=this.fb.group({
      from:[''],
      subject:[''],
      text:[''],
    })
  }

  sendMail(){
    this.mService.contactMe(this.mailForm.value).subscribe((res)=>{
      console.log("ressssss",res);
      
    })
  }
}
