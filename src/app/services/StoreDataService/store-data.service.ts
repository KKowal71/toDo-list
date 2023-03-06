import { Injectable } from '@angular/core';
import {TaskService} from "../AddingTasksService/task.service";

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {


  constructor() { }

  storeData(key, data) {
    localStorage.setItem(key, data);
  }

  getData(key) {
    let data = localStorage.getItem(key);
    return data;
  }

  removeData(key) {
    localStorage.removeItem(key);
  }

}
