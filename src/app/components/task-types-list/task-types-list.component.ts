import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categories, Task } from 'src/app/models';
import { TaskState } from 'src/app/reducers/task';
// import { taskAdd } from 'src/app/reducers/task/task.actions';
import {
  getTaskCategoryAll,
  getTaskCategoryToday,
  selectTasks,
} from 'src/app/reducers/task/task.selector';

@Component({
  selector: 'app-task-types-list',
  templateUrl: './task-types-list.component.html',
  styleUrls: ['./task-types-list.component.scss'],
})
export class TaskTypesListComponent {
  categories = categories;

  tasksAll$: Observable<Task[]> = this.taskStore$.pipe(
    select(getTaskCategoryAll)
  );
  tasksToday$: Observable<Task[]> = this.taskStore$.pipe(
    select(getTaskCategoryToday)
  );

  constructor(private taskStore$: Store<TaskState>) {}

  // addTask() {
  //   this.taskStore$.dispatch(
  //     taskAdd({ id: 'eee2222', title: '123123123', completed: false })
  //   );
  // }
}
