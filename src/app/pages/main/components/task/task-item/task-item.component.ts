import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Task, TaskItemBlur, TaskMode } from './types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() completed = false;
  @Input() title = '';
  @Input() mode: Task['mode'] = 'read';

  @Output() onCompleted = new EventEmitter<boolean>();
  @Output() changeMode = new EventEmitter<TaskMode>();
  @Output() blurTaskItem = new EventEmitter<TaskItemBlur>();

  completedChange(value: boolean) {
    this.onCompleted.emit(value);
  }

  onChangeMode(mode: TaskMode) {
    this.changeMode.emit(mode);
  }

  onClickTitleText() {
    this.onChangeMode('edit');
  }

  onBlurTaskItem() {
    this.blurTaskItem.emit({
      title: this.title,
      completed: this.completed,
      mode: this.mode,
    });
  }

  constructor() {}
}
