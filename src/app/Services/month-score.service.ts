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

  getScoresByMember(id:number,headers?: HttpHeaders):Observable<MonthScore[]>{
    return this.http.get<MonthScore[]>(this.baseUrl,{ headers: headers })
  }
}
