import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonthScore } from 'src/app/models/month-score';
import { MonthScoreService } from 'src/app/services/month-score.service';
import { ScorecardPopupComponent } from '../popups/pop_ups/scorecard-popup/scorecard-popup.component';

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.css']
})
export class ScorecardsComponent {
  scoreCards!:MonthScore[]
  headers!:HttpHeaders

  constructor(private msService:MonthScoreService,private dialogRef:MatDialog){}

  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.msService.getAllMonthScores(this.headers).subscribe((res)=>{
      console.log("mo",res);
      this.scoreCards=res
    })

    
  }

  openScoreCardPopup(id:number){
    this.dialogRef.open(ScorecardPopupComponent,{
      data:{id:id}
    })
  }
}
