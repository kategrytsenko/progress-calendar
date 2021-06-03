import { Component } from '@angular/core';
import { TaskModel } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progress-calendar';
  tasksList: TaskModel[] = []; // get from Server
}
