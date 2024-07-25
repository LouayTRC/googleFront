import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  baseUrl=environment.apiUrl+"/work"
  constructor(private http:HttpClient) { }

  getAllWorks(headers?: HttpHeaders):Observable<Work[]>{
    return this.http.get<Work[]>(this.baseUrl,{ headers: headers })
  }

  getWorksByMember(headers?: HttpHeaders):Observable<Work[]>{
    return this.http.get<Work[]>(this.baseUrl+"/member",{ headers: headers })
  }

  getWorkById(id:number,headers?: HttpHeaders):Observable<Work>{
    return this.http.get<Work>(this.baseUrl+"/"+id,{ headers: headers })
  }
  updateNote(id:number,note:number,headers?: HttpHeaders):Observable<Work>{
    return this.http.put<Work>(this.baseUrl+"/note/"+id,note,{ headers: headers })
  }

  submitWork(id:number,url:String,headers?: HttpHeaders):Observable<Work>{
    return this.http.put<Work>(this.baseUrl+"/submit/"+id,url,{ headers: headers })
  }
}
