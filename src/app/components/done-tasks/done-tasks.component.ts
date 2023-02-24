import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {CurrentTasksComponent} from "../current-tasks/current-tasks.component";

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {  }
}
