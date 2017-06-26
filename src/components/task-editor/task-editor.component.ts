import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  taskId = '';

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location) {
  }

  saveTask(e, title) {
    e.preventDefault();
    this.taskService.editTask(title, this.taskId);
    this.location.back();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.taskId = params['id'];
        console.log('this!', params['id']);
      }
    });
  }

}
