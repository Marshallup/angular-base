import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() completeTask = new FormControl(false);
  @Input() label = '';

  @Output() toggleTask: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.onChange();
  }

  onChange() {
    this.completeTask.valueChanges.subscribe((value) => {
      if (value !== null) {
        this.toggleTask.emit(value);
      }
    });
  }
}
