import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-item',
  template: `
    <span>{{ title }}</span>
  `,
  styles: [],
})
export class TodoItemComponent implements OnInit {
  title: string;

  constructor(private http: HttpClient, private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodo(1)
      .subscribe(
        (response) => { console.log(response); },
        error => console.log('Error', error),
      );
  }
}
