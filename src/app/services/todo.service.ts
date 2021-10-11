import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodo(postId: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('postId', postId);

    let headers = new HttpHeaders();
    headers = headers.append('bruno', 'beckmann');

    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {
      headers,
      params,
    });
  }
}
