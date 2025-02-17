import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl=environment.apiUrl+"/app"
  constructor(private http:HttpClient) { }

  getApplications(headers?:HttpHeaders):Observable<Application[]>{
    return this.http.get<Application[]>(this.baseUrl,{headers:headers})
  }

  getApplicationById(id:number,headers?:HttpHeaders):Observable<Application>{
    return this.http.get<Application>(this.baseUrl+"/"+id,{headers:headers})
  }

  addApplication(form:Application):Observable<Application>{
    return this.http.post<Application>(this.baseUrl+"/add",form)
  }

  updateStatus(id:number,status:number,headers?:HttpHeaders):Observable<Application>{
    return this.http.put<Application>(this.baseUrl+"/update/"+id,status,{headers:headers})
  }
}
