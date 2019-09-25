import { Injectable } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from '../interface/post.interface';
import { isDefined } from '@angular/compiler/src/util';

@Injectable()
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postService: DataServiceService) { }

  resolve(route: ActivatedRouteSnapshot):Observable<any[]>{
    let id:number = isDefined(route.params.id)? route.params.id: 1 ;
    
    return this.postService.getAllArticleByCategoryData(id);
    // return this.postService.getPost('posts');
  }
}
