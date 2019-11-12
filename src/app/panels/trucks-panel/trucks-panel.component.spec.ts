import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksPanelComponent } from './trucks-panel.component';

describe('TrucksPanelComponent', () => {
  let component: TrucksPanelComponent;
  let fixture: ComponentFixture<TrucksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
