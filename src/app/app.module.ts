import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { NewTaskComponent } from './Components/new-task/new-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { MarkTaskComponent } from './Components/mark-task/mark-task.component';
import { DeleteTaskComponent } from './Components/delete-task/delete-task.component';
import { TagTaskComponent } from './Components/tag-task/tag-task.component';
import { ResponsableTaskComponent } from './Components/responsable-task/responsable-task.component';
import { ListTaskComponent } from './Components/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,
    MarkTaskComponent,
    DeleteTaskComponent,
    TagTaskComponent,
    ResponsableTaskComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
