import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{PostResolveService} from './landing-page/post-resolve.service';

const routes: Routes = [
  { path: 'articles/:id',      component: LandingPageComponent,resolve:{
    posts:PostResolveService
  } },
  { path: '', component: LandingPageComponent ,resolve:{
    posts:PostResolveService
  } },
  { path: '**', component: LandingPageComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
