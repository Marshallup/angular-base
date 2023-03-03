import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models';
import { TaskState } from 'src/app/reducers/task';
import { taskAdd } from 'src/app/reducers/task/task.actions';
import { selectTasks } from 'src/app/reducers/task/task.selector';

@Component({
  selector: 'app-task-types',
  templateUrl: './task-types.component.html',
  styleUrls: ['./task-types.component.scss'],
})
export class TaskTypesComponent {
  tasks$: Observable<Task[]> = this.taskStore$.pipe(select(selectTasks));
  constructor(private taskStore$: Store<TaskState>) {}

  addTask() {
    this.taskStore$.dispatch(
      taskAdd({ id: 'eee2222', title: '123123123', completed: false })
    );
  }

  updateTask() {
    // this.taskStore$.di
  }

  getTaskById() {
    // this.taskStore$.pipe(select(getTaskById('eee2222'))).subscribe((item) => {
    //   console.log(item, 'item');
    // });
  }
}
