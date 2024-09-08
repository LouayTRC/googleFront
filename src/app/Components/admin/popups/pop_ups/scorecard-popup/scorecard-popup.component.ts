import { DialogRef } from '@angular/cdk/dialog';
import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Member } from 'src/app/models/member';
import { MonthScore } from 'src/app/models/month-score';
import { MonthScoreService } from 'src/app/services/month-score.service';

@Component({
  selector: 'app-scorecard-popup',
  templateUrl: './scorecard-popup.component.html',
  styleUrls: ['./scorecard-popup.component.css']
})
export class ScorecardPopupComponent {

  headers!:HttpHeaders
  scoreCard!: MonthScore
  
  constructor(private mSService: MonthScoreService,@Inject(MAT_DIALOG_DATA) public data:any,private matDialog:DialogRef) { }
  ngOnInit() {
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log("data",this.data);

    this.mSService.getMonthScoreById(this.data.id,this.headers).subscribe((res)=>{
      this.scoreCard=res
      console.log("res",res);
      
    })
    
  }
  
    updateMs(ms:MonthScore){
      this.mSService.updateMonthScore(ms.score_id,ms,this.headers).subscribe((res)=>{
        console.log("ipda",res);
        this.matDialog.close(res)
      })
    }
  closePopup(){
    this.matDialog.close(null)
  }
}
