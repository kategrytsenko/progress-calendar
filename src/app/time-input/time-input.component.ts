import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {
  @Input() hours: number;
  @Input() minutes: number;
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
