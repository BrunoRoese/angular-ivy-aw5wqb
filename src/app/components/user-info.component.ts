import { Component, Input } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'user-info',
  template: `
    <div>
      <img [src]="img">
      <span>{{ name }}</span>
    </div>
  `,
  styles: [
    'div { padding: 8px; display: flex; align-items: center; border: 1px solid purple }',
    'img { width: 40px; height: 40px; margin-right: 16px }',
  ],
})
export class UserInfoComponent {
  name: string;
  img: string;

  constructor(private userService: UserService) {
    this.name = userService.name;
    this.img = userService.img;
  }
}
