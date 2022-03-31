import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRendezVousComponent } from './doctor-rendez-vous.component';

describe('DoctorRendezVousComponent', () => {
  let component: DoctorRendezVousComponent;
  let fixture: ComponentFixture<DoctorRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
