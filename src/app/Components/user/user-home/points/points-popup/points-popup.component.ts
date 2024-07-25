import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MonthScore } from 'src/app/models/month-score';
import { MonthScoreService } from 'src/app/services/month-score.service';
// import { Depo } from 'src/app/models/Depo';
// import { MonthScore } from 'src/app/models/month-score';
// import { MonthScoreService } from 'src/app/services/month-score.service';

@Component({
  selector: 'app-points-popup',
  templateUrl: './points-popup.component.html',
  styleUrls: ['./points-popup.component.css']
})
export class PointsPopupComponent {
  scores!:MonthScore[]
  constructor(private msService:MonthScoreService,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(){
    let user=this.data.user;
    console.log("ise",user);
    
    this.msService.getScoresByMember(user.member.member_id).subscribe((res)=>{
      this.scores=res
    })
    
  }
}
