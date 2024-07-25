import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-recent-tasks',
  templateUrl: './recent-tasks.component.html',
  styleUrls: ['./recent-tasks.component.css']
})
export class RecentTasksComponent {
  departs!: Department[]
  headers!:HttpHeaders

  // recentDevTasks:Task[]=[]
  // recentMediaTasks:Task[]=[]
  constructor(private dservice: DepartmentService) { }
  ngOnInit() {

    const token=sessionStorage.getItem('token')
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.dservice.getDepartments(this.headers).subscribe((res) => {
      this.departs = res
      console.log("deps", this.departs);
    })
  }
}
