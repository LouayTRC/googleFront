import { HttpHandler, HttpHeaders } from '@angular/common/http';
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
  headers!:HttpHeaders
  constructor(private msService:MonthScoreService,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(){
    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
    
    this.msService.getScoresByMember(this.headers).subscribe((res)=>{
      this.scores=res
    })
    
  }
}
