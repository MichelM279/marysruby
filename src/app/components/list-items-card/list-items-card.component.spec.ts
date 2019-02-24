import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsCardComponent } from './list-items-card.component';

describe('ListItemsCardComponent', () => {
  let component: ListItemsCardComponent;
  let fixture: ComponentFixture<ListItemsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
