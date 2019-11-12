import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesPanelComponent } from './buses-panel.component';

describe('BusesPanelComponent', () => {
  let component: BusesPanelComponent;
  let fixture: ComponentFixture<BusesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
