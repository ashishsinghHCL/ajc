import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-article-teaser',
  templateUrl: './article-teaser.component.html',
  styleUrls: ['./article-teaser.component.css']
})
export class ArticleTeaserComponent implements OnInit {
  @Input() article:any;
  @Input() category:any;
  constructor() { }

  ngOnInit() {
    console.log(this.category);
  }

}
