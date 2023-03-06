import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [];
  constructor() {
    // Examples of tasks, not needed with normal usage
    // this.tasks = [
    //   {id: 1, description: 'eat', deadline: '2nd if July 2023', isDone: false},
    //   {id: 2, description: 'code', deadline: '3rd if July 2023', isDone: false},
    //   {id: 3, description: 'sleep', deadline: '4th if July 2023', isDone: false},
    //   {id: 4, description: 'repeat', deadline: '5th if July 2023', isDone: false},
    // ]
  }
}
