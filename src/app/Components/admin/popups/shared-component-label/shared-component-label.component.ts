import { Component, Input } from '@angular/core';
import { Application } from 'src/app/models/application';
// import { Application } from 'src/app/models/application';

@Component({
  selector: 'app-shared-component-label',
  templateUrl: './shared-component-label.component.html',
  styleUrls: ['./shared-component-label.component.css']
})
export class SharedComponentLabelComponent {
  @Input() page!:String

}
