import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardWithRoutingComponent } from './news-card-with-routing.component';

describe('NewsCardWithRoutingComponent', () => {
  let component: NewsCardWithRoutingComponent;
  let fixture: ComponentFixture<NewsCardWithRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardWithRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardWithRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
