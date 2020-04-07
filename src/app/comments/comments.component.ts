import {Component, Input, OnInit} from '@angular/core';
import {CommentsModels} from '../models/comentsModul';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comment: CommentsModels;

  constructor() {
  }

  ngOnInit(): void {
  }

}
