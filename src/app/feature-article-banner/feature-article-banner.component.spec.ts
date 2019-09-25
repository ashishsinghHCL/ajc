import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureArticleBannerComponent } from './feature-article-banner.component';

describe('FeatureArticleBannerComponent', () => {
  let component: FeatureArticleBannerComponent;
  let fixture: ComponentFixture<FeatureArticleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureArticleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureArticleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
