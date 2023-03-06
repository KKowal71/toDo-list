import { Component, OnInit } from '@angular/core';
import {PassDataService} from "../../services/PassingDoneTasksService/pass-data.service";
import {StoreDataService} from "../../services/StoreDataService/store-data.service";

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  constructor(public passData: PassDataService, private storage: StoreDataService) { }

  ngOnInit(): void {
    const tmpTasks = this.storage.getData('doneTasksKey');
    if(tmpTasks){
      this.passData.doneTasks = JSON.parse(tmpTasks);
    }
  }

}
