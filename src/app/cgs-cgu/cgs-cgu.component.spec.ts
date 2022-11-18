import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGSCGUComponent } from './cgs-cgu.component';

describe('CGSCGUComponent', () => {
  let component: CGSCGUComponent;
  let fixture: ComponentFixture<CGSCGUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGSCGUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGSCGUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
