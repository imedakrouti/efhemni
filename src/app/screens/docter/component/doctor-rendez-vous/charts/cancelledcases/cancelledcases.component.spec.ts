import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledcasesComponent } from './cancelledcases.component';

describe('CancelledcasesComponent', () => {
  let component: CancelledcasesComponent;
  let fixture: ComponentFixture<CancelledcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledcasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
