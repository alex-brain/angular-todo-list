import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardCreatorComponent } from '../pages/board-creator/board-creator.component';

import { BoardService } from '../services/board/board.service';
import { TaskService } from '../services/task/task.service';
import { BoardListComponent } from '../pages/board-list/board-list.component';
import { TaskListComponent } from '../pages/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardCreatorComponent,
    BoardListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BoardService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
