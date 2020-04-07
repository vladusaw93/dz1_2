import {Component} from '@angular/core';
import {CommentsModels} from './models/comentsModul';
import {CommentsService} from './services/cooments.service';

@Component({
  selector: 'app-root',
  template: '<app-comments *ngFor="let c of comments" [comment]="c"></app-comments>',
  styles: ['']
})
export class AppComponent {
  comments: CommentsModels[];

  constructor(private commentService: CommentsService) {

    this.commentService.getComments().subscribe(value => {
      this.comments = value;
      console.log(value);
    });
  }


}
