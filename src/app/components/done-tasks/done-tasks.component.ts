import { Component, OnInit } from '@angular/core';
import {PassDataService} from "../../services/PassingDoneTasksService/pass-data.service";

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  constructor(public passData: PassDataService) { }

  ngOnInit(): void { }

}
