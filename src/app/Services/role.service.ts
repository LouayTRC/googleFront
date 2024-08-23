import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl=environment.apiUrl+"/role"
  constructor(private http:HttpClient) { }

  getRoles(headers?:HttpHeaders):Observable<Role[]>{
    return this.http.get<Role[]>(this.baseUrl,{ headers: headers })
  }
}
