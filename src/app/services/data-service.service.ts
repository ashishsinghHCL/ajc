import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { IPost } from '../interface/post.interface';
import { delay,map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl:string = "http://localhost:3000/";
  baseUrlJsonPlaceholder:string = "https://jsonplaceholder.typicode.com/";



  constructor(private ds:HttpClient) { }

  get(EndPoint:string) { 
    return this.ds.get(this.baseUrl+EndPoint);
  }

  getRequest(EndPoint:string) { 
    return this.ds.get(this.baseUrl+EndPoint);
  }

  getPost(EndPoint:string):Observable<IPost[]>{
    return this.ds.get<IPost[]>(this.baseUrlJsonPlaceholder+EndPoint).pipe(delay(1000));
  }

  getAllArticleByCategoryData(id:number){
    return forkJoin(
      this.get('articles?categoryId='+id).pipe(map((res:Response) => res)),
      this.get('featuredArticlesBanner?categoryId='+id).pipe(map((res:Response) => res)),
      this.get('categories?id='+id).pipe(map((res:Response) => res))
    )
  }

}
