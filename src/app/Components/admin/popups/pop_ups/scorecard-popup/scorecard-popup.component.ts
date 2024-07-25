import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { MonthScoreService } from 'src/app/services/month-score.service';

@Component({
  selector: 'app-scorecard-popup',
  templateUrl: './scorecard-popup.component.html',
  styleUrls: ['./scorecard-popup.component.css']
})
export class ScorecardPopupComponent {
  members!:Member[]
  headers!:HttpHeaders
  scoreCard!: FormGroup
  year!:number
  months:any=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
  month!:string
  constructor(private mService: MemberService, private formBuilder: FormBuilder, private mSService: MonthScoreService,private dialogRef: MatDialog) { }
  ngOnInit() {
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.year=new Date().getFullYear();
    this.month=this.months[new Date().getMonth()]
    console.log("month",this.month);
    console.log("year",this.year);
    
    this.mService.getAllMembers().subscribe((res) => {
      this.members = res;
      console.log("members",this.members);
    })
    this.scoreCard = this.formBuilder.nonNullable.group({
      media: [""],
      discipline: [""],
      contribution: [""],
      departPoints: [""],
    });
  }
  addMonthScore(idmember:string){
    this.scoreCard.value.month=this.month;
    this.scoreCard.value.year=this.year;
    this.scoreCard.value.moyen=(this.scoreCard.value.discipline+this.scoreCard.value.media+this.scoreCard.value.contribution+this.scoreCard.value.departPoints)/4;
    this.mSService.addMonthS(parseInt(idmember),this.scoreCard.value).subscribe((res)=>{
      console.log("added month score",res);
      this.dialogRef.closeAll()
    })
  }
}
