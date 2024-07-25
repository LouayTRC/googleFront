import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Task } from '../models/Task';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl=environment.apiUrl+"/task"
  constructor(private http:HttpClient) { }

  getTasks(headers?: HttpHeaders):Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl,{ headers: headers })
  }

  // getTasksByDepartment(dep:Department,headers?: HttpHeaders):Observable<Task[]>{  
  //   return this.http.post<Task[]>(this.baseUrl+"/dep",dep);
  // }

  getTaskById(id:number,headers?: HttpHeaders):Observable<Task>{  
    return this.http.get<Task>(this.baseUrl+"/"+id,{ headers: headers })
  }

  addTask(t:Task,headers?: HttpHeaders):Observable<Task>{  
    return this.http.post<Task>(this.baseUrl,t,{ headers: headers })
  }

  updateTask(task:Task,headers?: HttpHeaders):Observable<Task>{
    return this.http.put<Task>(this.baseUrl,task,{ headers: headers })
  }

  deleteTask(id:number,headers?: HttpHeaders):Observable<any>{
    return this.http.delete<any>(this.baseUrl+"/"+id,{ headers: headers })
  }

}

