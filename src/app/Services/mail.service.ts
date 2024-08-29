import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Mail } from '../models/mail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  baseUrl=environment.apiUrl+"/mail"
  constructor(private http:HttpClient) { }

  contactMe(m:Mail):Observable<any>{
    return this.http.post<any>(this.baseUrl,m)
  }
}
