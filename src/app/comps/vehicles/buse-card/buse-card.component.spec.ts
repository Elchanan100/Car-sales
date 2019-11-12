import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuseCardComponent } from './buse-card.component';

describe('BuseCardComponent', () => {
  let component: BuseCardComponent;
  let fixture: ComponentFixture<BuseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
