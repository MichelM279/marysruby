import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaroidCollageComponent } from './polaroid-collage.component';

describe('PolaroidCollageComponent', () => {
  let component: PolaroidCollageComponent;
  let fixture: ComponentFixture<PolaroidCollageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolaroidCollageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaroidCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
