import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsModels} from '../models/comentsModul';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentsModels[]> {
    return this.http.get<CommentsModels[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}
