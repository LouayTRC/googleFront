import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
// import { Departement } from 'src/app/models/departement';
import { Member } from 'src/app/models/member';
import { Work } from 'src/app/models/work';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent {
  @Input () work!:Work

  ngOnInit(){
    console.log("tasl",this.work);
    
  }
}
