import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Event } from '../models/event';
import { MemberEvent } from '../models/member-event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl=environment.apiUrl+"/event"

  constructor(private http:HttpClient) { }

  getEvents(headers?: HttpHeaders):Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl,{ headers: headers })
  }

  getEventById(id:number,headers?: HttpHeaders):Observable<Event>{  
    return this.http.get<Event>(this.baseUrl+"/"+id,{ headers: headers })
  }

  addEvent(t:Event,headers?: HttpHeaders):Observable<Event>{  
    return this.http.post<Event>(this.baseUrl,t,{ headers: headers })
  }

  updateEvent(event:Event,headers?: HttpHeaders):Observable<Event>{
    return this.http.put<Event>(this.baseUrl+"/"+event.id,event,{ headers: headers })
  }

  deleteEvent(id:number,headers?: HttpHeaders):Observable<any>{
    return this.http.delete<any>(this.baseUrl+"/"+id,{ headers: headers })
  }

  memberIsPresent(id:number,headers?: HttpHeaders):Observable<MemberEvent>{
    return this.http.put<MemberEvent>(this.baseUrl+'/present/'+id,true,{ headers: headers });
  }

  memberIsAbsent(id:number,headers?: HttpHeaders):Observable<MemberEvent>{
    return this.http.put<MemberEvent>(this.baseUrl+'/absent/'+id,true,{ headers: headers });
  }

  getPresence(id:number,headers?: HttpHeaders):Observable<MemberEvent[]>{
    return this.http.get<MemberEvent[]>(this.baseUrl+"/presence/"+id,{ headers: headers })
  }
}
