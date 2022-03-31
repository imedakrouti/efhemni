import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/teacher/dashboard/dashboard.component';
import { FullComponent } from './layout/full.component';
import { DoctorCalendarComponent } from './screens/docter/component/doctor-calendar/doctor-calendar.component';
import { DoctorRendezVousComponent } from './screens/docter/component/doctor-rendez-vous/doctor-rendez-vous.component';

const routes: Routes = [
  { path: '', component: FullComponent },
  { path: 'teacherDashboard', component: DashboardComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'doctor-calendar',
    component: DoctorCalendarComponent,
  },
  {
    path: 'doctor-rendez-vous',
    component: DoctorRendezVousComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
