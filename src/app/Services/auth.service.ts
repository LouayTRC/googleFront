import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.apiUrl+"/auth"
  constructor(private http:HttpClient,private router:Router) { }

  user = new BehaviorSubject<any>(null)
  getUser=this.user.asObservable()

  login(form:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/login",form)
  }

  register(form:User):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/register",form)
  }

  addAdmin(form:any,headers?: HttpHeaders):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/admin",form,{ headers: headers })
  }
  verifyToken(token:String):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/verify/"+token,null);
  }

  logout(){
    this.setUser(undefined);
    sessionStorage.removeItem("token");
    this.router.navigate(["/home"])
  }
  setUser(aa:any){
    this.user.next(aa)
  }
}
