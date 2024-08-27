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
  months:any[]=["January","February","March","April","May","June","July","August","September","October","November","december"]
  dateFilter!:any
  memberfilter:String=""
  scoreCards!:MonthScore[]
  filtredScoreCards!:MonthScore[]
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
      this.filtredScoreCards=res
      this.scoreCards=structuredClone(this.filtredScoreCards);
    })

    
  }

  openScoreCardPopup(id:number){
    this.dialogRef.open(ScorecardPopupComponent,{
      data:{id:id},
      width:'30%' ,
      height:'50%',
      panelClass:'centered-popup'
    })
  }

  filterByDate() {
    this.filtredScoreCards=this.scoreCards 
    if (this.memberfilter!="") {
      this.filtredScoreCards=this.filtredScoreCards=this.filtredScoreCards.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberfilter.toUpperCase()))
    }
    console.log("dates",this.dateFilter);
    if (this.dateFilter) {
      let m=this.dateFilter.substring(5,7)
      let y=this.dateFilter.substring(0,4)
      this.filtredScoreCards=this.filtredScoreCards.filter(elem=>elem.year==parseInt(y) && elem.month==this.months[parseInt(m)-1] )
    }
  
  }

  resetFilter(){
    this.dateFilter=undefined;
    if (this.memberfilter!="") {
      this.filtredScoreCards=this.scoreCards.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberfilter.toUpperCase()))
    } else {
      this.filtredScoreCards=this.scoreCards
    }
  }

  filterByMember(){
    console.log("dddsssss");
    
    if (this.dateFilter) {
      console.log("dee");
      let m=this.dateFilter.substring(5,7)
      let y=this.dateFilter.substring(0,4)
      this.filtredScoreCards=this.scoreCards.filter(elem=>elem.year==parseInt(y) && elem.month==this.months[parseInt(m)-1] )
      if (this.memberfilter!=""){
        this.filtredScoreCards=this.filtredScoreCards.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberfilter.toUpperCase()))
      }
    }
    else{
      console.log("ssss");
      
      if (this.memberfilter!=""){
        this.filtredScoreCards=this.scoreCards.filter(elem=>elem.member.user.fullname.toUpperCase().includes(this.memberfilter.toUpperCase()))
      }
      else{
        this.filtredScoreCards=this.scoreCards
      }
      
    }
  }
}
