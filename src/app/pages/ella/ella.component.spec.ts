import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllaComponent } from './ella.component';

describe('EllaComponent', () => {
  let component: EllaComponent;
  let fixture: ComponentFixture<EllaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
