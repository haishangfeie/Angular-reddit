export class Article {
  title:string;
  link:string;
  votes:number;
  constructor(title:string,link:string,votes?:number) {
    this.title =title;
    this.link =link;
    this.votes =votes || 0;
  }
  upVote() {
    this.votes +=1;
  }
  downVote() {
    this.votes -=1;
  }
  domain():string{
    try {
      var temp:string = this.link.split('//')[1];
      return temp.split('/')[0];
    }
    catch(err){
      return null;
    }
  }
}