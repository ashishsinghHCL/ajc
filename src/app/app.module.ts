import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { POSITION,PB_DIRECTION,NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { FeatureArticleBannerComponent } from './feature-article-banner/feature-article-banner.component';
import { ArticleTeaserComponent } from './article-teaser/article-teaser.component';
import{PostResolveService} from './landing-page/post-resolve.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupModalComponent } from './signup-modal/signup-modal.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FeatureArticleBannerComponent,
    ArticleTeaserComponent,
    SignupModalComponent
  ], 
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [PostResolveService],
  bootstrap: [AppComponent],
  entryComponents:[SignupModalComponent]
})
export class AppModule { }
