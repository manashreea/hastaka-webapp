import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoponComponent } from './shopon.component';

describe('ShoponComponent', () => {
  let component: ShoponComponent;
  let fixture: ComponentFixture<ShoponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
