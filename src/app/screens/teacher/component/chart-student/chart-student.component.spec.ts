import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudentComponent } from './chart-student.component';

describe('ChartStudentComponent', () => {
  let component: ChartStudentComponent;
  let fixture: ComponentFixture<ChartStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
