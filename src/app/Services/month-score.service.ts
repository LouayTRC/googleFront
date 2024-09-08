import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { MonthScore } from '../models/month-score';

@Injectable({
  providedIn: 'root'
})
export class MonthScoreService {
  baseUrl=environment.apiUrl+"/ms"
  constructor(private http:HttpClient) { }

  getScoresByMember(headers?: HttpHeaders):Observable<MonthScore[]>{
    return this.http.get<MonthScore[]>(this.baseUrl,{ headers: headers })
  }

  getAllMonthScores(headers?: HttpHeaders):Observable<MonthScore[]>{
    return this.http.get<MonthScore[]>(this.baseUrl+"/all",{ headers: headers })
  }

  getMonthScoreById(id:number,headers?: HttpHeaders):Observable<MonthScore>{
    return this.http.get<MonthScore>(this.baseUrl+"/"+id,{ headers: headers })
  }

  updateMonthScore(id:number,ms:MonthScore,headers?:HttpHeaders):Observable<MonthScore>{
    return this.http.patch<MonthScore>(this.baseUrl+"/"+id,{ contribution: ms.contribution, discipline: ms.discipline },{ headers: headers })
  }
}
