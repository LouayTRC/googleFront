import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { User } from '../models/user';
import { Member } from '../models/member';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.apiUrl+"/user"
  constructor(private http:HttpClient) { }

  getAllUsers(headers?: HttpHeaders):Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl,{ headers: headers })
  }

  getAllMembers(headers?: HttpHeaders):Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl+"/member",{ headers: headers })
  }

  getLeaderBoard(headers?: HttpHeaders):Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl+"/leaderboard",{ headers: headers })
  }

  getAllAdmins(headers?: HttpHeaders):Observable<Admin[]>{
    return this.http.get<Admin[]>(this.baseUrl+"/admin",{ headers: headers })
  }

  updateStatusAccount(id:number,status:boolean,headers?: HttpHeaders):Observable<any>{
    return this.http.put<any>(this.baseUrl+"/status/"+id,status,{headers:headers})
  }

}
