import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-header',
  template: `
    <div>
      <h1>My app</h1>
      <user-info></user-info>
    </div>
  `,
  styles: [
    'div { margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center }',
    'h1 { margin: 0; }',
  ],
})
export class NavHeaderComponent {}
