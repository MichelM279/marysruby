import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCoverComponent } from './dog-cover.component';

describe('DogCoverComponent', () => {
  let component: DogCoverComponent;
  let fixture: ComponentFixture<DogCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
