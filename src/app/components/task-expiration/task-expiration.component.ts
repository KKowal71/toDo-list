import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/AddingTasksService/task.service";

@Component({
  selector: 'app-task-expiration',
  templateUrl: './task-expiration.component.html',
  styleUrls: ['./task-expiration.component.css']
})
export class TaskExpirationComponent {
  isHover: boolean = false;
  time: number;
  hoverDelay: number = 1300;

  constructor(private _taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  enterTask(date): any {
    this.time = setTimeout(() => {
      this.isHover = true;
      let messageBox = document.getElementById("dateLeft");
      messageBox.style.display = 'block';
      let splittedDate: string = this.splitDate(date);
      let numberOfDays: number = this.calculateTimeLeft(splittedDate);
      this.createMessage(numberOfDays, messageBox);
    }, this.hoverDelay);
  }

  splitDate(date): string {
    var dateHolder = date.split('-', 3);
    this.calculateTimeLeft(dateHolder);
    return dateHolder;
  }

  calculateTimeLeft(dateHolder): number {
    var currentDate = new Date();
    if(dateHolder.length != 3){
      return 0.7;
    }
    var taskDate = new Date(dateHolder[2], dateHolder[1] - 1, dateHolder[0]);
    var diffBetweenDates = Math.floor(taskDate.getTime() - currentDate.getTime());
    var numberOfDays = 1000 * 60 * 60 * 24;
    var days = Math.floor(diffBetweenDates / numberOfDays);
    return days + 1;
  }

  createMessage(numberOfDays: number, messageBox: any) {
    let color = this.matchAppropriateColor(numberOfDays);
    messageBox.style.color = color;
    let notification = this.matchAppropriateNotification(color);
    let completedMessage = this.completeMessageFormat(numberOfDays, notification);
    messageBox.innerHTML = completedMessage;
  }

  matchAppropriateColor(numberOfDays: number): string {
    let color;
    if (numberOfDays < 4) {
      color = 'red';
    } else if (numberOfDays < 8) {
      color = 'darkorange';
    } else {
      color = 'green';
    }
    return color;
  }

  matchAppropriateNotification(color: string): string{
    let notification
    if (color == 'red'){
      notification = "REAL TROUBLE 😓";
    } else if(color == 'darkorange'){
      notification = "BE CAREFULL 😳";
    } else {
      notification = "PEACE AND QUIET 😎";
    }
    return notification;
  }

  completeMessageFormat(numberOfDays: number, notification: string): string {
    let outputMessage;
    if(numberOfDays == 0.7){
      outputMessage = "Deadline is not set or set incorrectly";
    } else if(numberOfDays < 0){
      outputMessage = "This deadline expired";
    } else if (numberOfDays == 1) outputMessage = "Expires in: " + numberOfDays.toString() + " day - " + notification;
    else outputMessage = "Expires in: " + numberOfDays.toString() + " days - " + notification;
    return outputMessage;
  }

  leaveTask() {
    clearTimeout(this.time);
    this.isHover = false;
    let messageBox = document.getElementById("dateLeft");
    messageBox.style.display = 'none';
  }
}

