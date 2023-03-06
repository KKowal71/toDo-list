import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/AddingTasksService/task.service";
import {PassDataService} from "../../services/PassingDoneTasksService/pass-data.service";
import {TaskExpirationComponent} from "../task-expiration/task-expiration.component";

declare var require: any;

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {

  constructor(private _taskService: TaskService, private _passData: PassDataService, public taskExpiration: TaskExpirationComponent) {
  }

  ngOnInit(): void {
  }


  get taskService(): TaskService {
    return this._taskService;
  }

  completeTask(task) {
    task.isDone = true;
    this.deleteTaskFromCurrentTasks(task);
    this.updateTaskId();
    this.addTaskToDoneTasks(task);
  }

  deleteTaskFromCurrentTasks(task) {
    let indexOfDeletedTask = task.id - 1;
    this._taskService.tasks.splice(indexOfDeletedTask, 1);
  }

  updateTaskId() {
    for (let i = 0; i < this._taskService.tasks.length; i++) {
      this._taskService.tasks[i].id = i + 1;
    }
  }

  addTaskToDoneTasks(task) {
    this._passData.doneTasks.push(task);
  }
}




