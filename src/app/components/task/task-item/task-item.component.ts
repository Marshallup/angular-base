import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() completed = false;
  @Input() title = '';

  @Output() onCompleted = new EventEmitter<boolean>();

  completedChange(value: boolean) {
    this.onCompleted.emit(value);
  }

  constructor() {}
}
