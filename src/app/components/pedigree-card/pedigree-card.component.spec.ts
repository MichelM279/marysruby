import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedigreeCardComponent } from './pedigree-card.component';

describe('PedigreeCardComponent', () => {
  let component: PedigreeCardComponent;
  let fixture: ComponentFixture<PedigreeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedigreeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedigreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
