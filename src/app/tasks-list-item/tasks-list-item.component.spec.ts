import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListItemComponent } from './tasks-list-item.component';

describe('TasksListItemComponent', () => {
  let component: TasksListItemComponent;
  let fixture: ComponentFixture<TasksListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
