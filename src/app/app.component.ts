import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  template: `
    <nav-header></nav-header>
    <user-info><user-info>
    <todo-item></todo-item>
  `,
})
export class AppComponent {
  constructor(private userService: UserService) {
    userService.login();
  }
}
