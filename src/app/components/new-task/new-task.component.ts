import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/AddingTasksService/task.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask;
  newId!: number;

  constructor(private taskService: TaskService) {
    this.newId = this.taskService.tasks.length + 1;
    this.newTask = {id: this.newId, description: '', deadline: '', isDone: false};
  }

  ngOnInit(): void { }

  addNewTask() {
    if(this.checkCorrectness()) {
      this.taskService.tasks.push(this.newTask);
      this.newId += 1;
      this.newTask = {id: this.newId, description: '', deadline: '', isDone: false};
      alert('added new task successfully');
    }
  }

  checkCorrectness(): boolean {
    let description = this.newTask.description;
    let deadline = this.newTask.deadline;
    if(!description && !deadline) {
      alert('You have to describe the task and set the deadline!!');
      return false;
    }
    if(!description) {
      alert('You have to describe the task!!');
      return false;
    }
    if(!deadline) {
      alert('You have to set the deadline!!');
      return false;
    }
    return true;
  }

  saveTasks(): void {
    let fileName = 'My toDo List.txt';
    let tasksInFile = ['Tasks you have to do:\n\n'];
    this.formatData(tasksInFile);
    this.createFile(fileName, tasksInFile);
  }

  formatData(tasksInFile): void {
    for(let i=0; i<this.taskService.tasks.length; i++) {
      let taskId = <string>this.taskService.tasks[i].id
      let tasksDataToFile = 'Task number: '+ taskId +'\n' + 'Task description: '
        + this.taskService.tasks[i].description + '\n' + 'Task deadline: ' + this.taskService.tasks[i].deadline + '\n\n';
      tasksInFile.push(tasksDataToFile);
    }
  }

  createFile(fileName, tasksInFile) {
    const file = new Blob(tasksInFile, {type: "tet/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }
}
