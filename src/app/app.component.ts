import { Component } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];
  title = 'app';
  constructor() { 
    this.articles = [
      new Article('Angular 2','http://angular.io',15),
      new Article('JavaScript','http://javascript.io',15),
      new Article('CSS入门指南','http://css.io',13)
    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    // console.log(`增加文章:${title.value}，链接是:${link.value}`);
    this.articles.push(new Article(title.value,link.value,0))
  }
  sortedArticles(){
    return this.articles.sort((a:Article,b:Article):number=>b.votes-a.votes);
  }
}
