import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Router, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentTasksComponent } from './components/current-tasks/current-tasks.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import {FormsModule} from "@angular/forms";
import { DoneTasksComponent } from './components/done-tasks/done-tasks.component';

const routes: Routes = [
  {path: 'active-tasks', component: CurrentTasksComponent},
  {path: 'done-tasks', component: DoneTasksComponent},
  {path: '', redirectTo: '/active-tasks', pathMatch: "full"}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentTasksComponent,
    NewTaskComponent,
    DoneTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
