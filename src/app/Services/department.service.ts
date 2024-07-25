import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl=environment.apiUrl+"/dep"
  constructor(private http:HttpClient) { }

  getDepartments(headers?: HttpHeaders):Observable<Department[]>{
    return this.http.get<Department[]>(this.baseUrl,{ headers: headers })
  }

  
}
