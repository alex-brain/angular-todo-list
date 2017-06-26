import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BoardCreatorComponent } from '../components/board-creator/board-creator.component';

import { BoardService } from '../services/board/board.service';
import { TaskService } from '../services/task/task.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { BoardListComponent } from '../components/board-list/board-list.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskEditorComponent } from '../components/task-editor/task-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardCreatorComponent,
    BoardListComponent,
    TaskListComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BoardService,
    TaskService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
