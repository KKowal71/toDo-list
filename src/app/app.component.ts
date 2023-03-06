import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StoreDataService} from "./services/StoreDataService/store-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ToDoList';

  constructor(private router: Router, public storage:StoreDataService) {
  }

  myFunction(isActive) {
    var activeCurrentTasks = document.getElementById("activeTasks");
    var activeDoneTasks = document.getElementById("doneTasks");
    if (isActive) {
      activeDoneTasks.classList.remove("activeStyle");
      activeCurrentTasks.classList.toggle("activeStyle");
    } else {
      activeDoneTasks.classList.toggle("activeStyle");
      activeCurrentTasks.classList.remove("activeStyle");
    }
  }

}




