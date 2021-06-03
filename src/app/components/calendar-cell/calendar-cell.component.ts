import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {
  editMode = false;
  hours = 0;
  minutes = 0;

  constructor() { }

  ngOnInit() {
  }

  editSpendedTime() {
    this.editMode = true;
  }

  saveSpendedTime() {
  }

}
