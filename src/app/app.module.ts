import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info.component';
import { NavHeaderComponent } from './components/nav-header.component';
import { UserService } from './services/user.service';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    NavHeaderComponent,
    UserInfoComponent,
    TodoItemComponent,
  ],
  providers: [UserService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
