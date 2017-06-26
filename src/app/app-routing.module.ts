import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoardListComponent} from '../pages/board-list/board-list.component';
import {TaskEditorComponent} from '../pages/task-editor/task-editor.component';

const routes: Routes = [
  {path: '', redirectTo: 'board-list', pathMatch: 'full'},
  {path: 'board-list', component: BoardListComponent},
  {path: 'task-editor', component: TaskEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


