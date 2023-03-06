import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/AddingTasksService/task.service";
import {PassDataService} from "../../services/PassingDoneTasksService/pass-data.service";
import {TaskExpirationComponent} from "../task-expiration/task-expiration.component";
import {StoreDataService} from "../../services/StoreDataService/store-data.service";

declare var require: any;

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {

  constructor(private _taskService: TaskService, private _passData: PassDataService,
              public taskExpiration: TaskExpirationComponent, private storage: StoreDataService) {
  }

  ngOnInit(): void {
    const tmpTasks = this.storage.getData('currentTasksKey');
    if(tmpTasks){
      this._taskService.tasks = JSON.parse(tmpTasks);
    }
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
    this.storage.removeData('currentTasksKey');
  }

  updateTaskId() {
    for (let i = 0; i < this._taskService.tasks.length; i++) {
      this._taskService.tasks[i].id = i + 1;
    }
  }

  addTaskToDoneTasks(task) {
    this._passData.doneTasks.push(task);
    this.storage.storeData('doneTasksKey', JSON.stringify(this._passData.doneTasks));
    this.storage.storeData('currentTasksKey', JSON.stringify(this.taskService.tasks));
  }
}




