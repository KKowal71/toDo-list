import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ToDoList';

  constructor(private router: Router) {
  }

  gotoList() {
    this.router.navigate(['/done-tasks']);
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




