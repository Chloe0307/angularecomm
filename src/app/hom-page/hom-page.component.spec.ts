import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomPageComponent } from './hom-page.component';

describe('HomPageComponent', () => {
  let component: HomPageComponent;
  let fixture: ComponentFixture<HomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
