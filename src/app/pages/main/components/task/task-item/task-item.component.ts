import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Task, TaskMode } from 'src/app/models';
import { TaskItemBlurEmit } from './types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskItemComponent),
      multi: true,
    },
  ],
})
export class TaskItemComponent {
  @Input() completed = false;
  @Input() ngModel: string | null = null;
  @Input() id: Task['id'] = '';
  @Input() mode: Task['mode'] = 'read';
  @Input() isCreate = false;

  @Output() ngModelChange = new EventEmitter();
  @Output() onCompleted = new EventEmitter<boolean>();
  @Output() changeMode = new EventEmitter<TaskMode>();
  @Output() blurTaskItem = new EventEmitter<TaskItemBlurEmit>();

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string) {
    this.ngModel = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

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
      title: this.ngModel === null ? '' : this.ngModel,
    });
  }

  constructor() {}
}
