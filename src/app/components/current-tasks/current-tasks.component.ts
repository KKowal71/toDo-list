import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {
   // const doneTasks: Array<{id: number, description: string, deadline: string, isDone: boolean}> = [];

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void { }

  completeTask(task) {
    task.isDone = true;
    this.deleteTaskFromCurrentTasks(task);
    //this.addTaskToDoneTasks(task);

    }

  deleteTaskFromCurrentTasks(task) {
    let indexOfDeletedTask = task.id - 1;
    this.taskService.tasks.splice(indexOfDeletedTask, 1);
  }

  // addTaskToDoneTasks(task) {
  //     alert('checkpoint - addTaskToDoneTasks');
  //     alert('checkpoint - fadklfnljdnflanfjbsjak');
  //     alert(this.doneTasks.length);
  //     this.doneTasks.push(task);
  // }

}
