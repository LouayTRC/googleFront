import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!:Task

  ngOnInit(){
    console.log("task",this.task);

  }
}
