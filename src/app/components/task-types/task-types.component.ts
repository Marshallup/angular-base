import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-types',
  templateUrl: './task-types.component.html',
  styleUrls: ['./task-types.component.scss'],
})
export class TaskTypesComponent {
  @Input() title = '';
  @Input() count = 0;

  constructor() {}

  updateTask() {
    // this.taskStore$.di
  }

  getTaskById() {
    // this.taskStore$.pipe(select(getTaskById('eee2222'))).subscribe((item) => {
    //   console.log(item, 'item');
    // });
  }
}
