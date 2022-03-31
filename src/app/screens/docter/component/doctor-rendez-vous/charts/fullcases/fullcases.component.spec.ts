import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcasesComponent } from './fullcases.component';

describe('FullcasesComponent', () => {
  let component: FullcasesComponent;
  let fixture: ComponentFixture<FullcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
