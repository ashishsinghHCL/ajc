import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-feature-article-banner',
  templateUrl: './feature-article-banner.component.html',
  styleUrls: ['./feature-article-banner.component.css']
})
export class FeatureArticleBannerComponent implements OnInit {
  @Input() banner:any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.banner);
  }

}
