import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute,Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import {Subscription, forkJoin} from 'rxjs';
import {Observable} from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
import { IPost } from '../interface/post.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers:[DataServiceService,NgxUiLoaderService]
})
export class LandingPageComponent implements OnInit {
  subscription: Subscription;
  id: number;
  private sub: any;
  articles:any;
  banner:any;
  category:any;
  posts:IPost[] = [];
  
  constructor(private ds:DataServiceService,private loader: NgxUiLoaderService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getAllData(this.id).subscribe((data:any) => {
        this.articles = data[0];
        this.banner = data[1][0];
        // console.log(data[1][0]);
        this.category = data[2][0];
      });

   });
   
  }
  
  getAllData(id:number){
    return forkJoin(
      this.ds.get('articles?categoryId='+id).pipe(map((res:Response) => res)),
      this.ds.get('featuredArticlesBanner?categoryId='+id).pipe(map((res:Response) => res)),
      this.ds.get('categories?id='+id).pipe(map((res:Response) => res))
    )
  }

}
