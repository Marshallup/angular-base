import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypesListComponent } from './task-types-list.component';

describe('TaskTypesListComponent', () => {
  let component: TaskTypesListComponent;
  let fixture: ComponentFixture<TaskTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
