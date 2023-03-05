import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/AddingTasksService/task.service";
import {PassDataService} from "../../services/PassingDoneTasksService/pass-data.service";
declare var require: any;

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {

  constructor(private _taskService: TaskService, private _passData: PassDataService) {
  }

  ngOnInit(): void { }


  get taskService(): TaskService {
    return this._taskService;
  }

  completeTask(task) {
    task.isDone = true;
    this.deleteTaskFromCurrentTasks(task);
    this.updateTaskId();
    this.addTaskToDoneTasks(task);
    // this.function();
    }

  deleteTaskFromCurrentTasks(task) {
    let indexOfDeletedTask = task.id - 1;
    this._taskService.tasks.splice(indexOfDeletedTask, 1);
  }

  updateTaskId() {
    for(let i=0; i<this._taskService.tasks.length; i++) {
      this._taskService.tasks[i].id = i+1;
    }
  }

  addTaskToDoneTasks(task) {
      this._passData.doneTasks.push(task);
  }

  async showExpiresTime(date) {
    await this.delay(2000);
    this.splitDate(date);
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  splitDate(date) {
    var dateHolder = date.split('-');
    this.calculateTimeLeft(dateHolder);
  }
  calculateTimeLeft(dateHolder) {
    var currentDate = new Date();
    var taskDate = new Date(dateHolder[2],dateHolder[1]-1,dateHolder[0]);
    var diffBetweenDates = Math.floor(taskDate.getTime() - currentDate.getTime());
    var numberOfDays = 1000 * 60 * 60 * 24;
    var days = Math.floor(diffBetweenDates/numberOfDays);
    alert(days);
  }

  onHover = false;
  to;

  enter(date) {
    this.to = setTimeout(() => {
      this.onHover = true;
      this.splitDate(date);
    }, 2000);
  }

  leave() {
    clearTimeout(this.to);
    this.onHover = false;
    // doing some other stuff...
  }
}
