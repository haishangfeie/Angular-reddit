import { Component, OnInit,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  ngOnInit() {
  }
  upVote() {
    this.article.upVote();
    return false;
  }
  downVote() {
    this.article.downVote()
    return false;
  }
}
