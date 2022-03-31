import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { UserComponent } from './layout/header/user/user.component';
import { NotificationComponent } from './layout/header/notification/notification.component';
import { DashboardComponent } from './screens/teacher/dashboard/dashboard.component';
import { ListTeacherComponent } from './screens/teacher/component/list-teacher/list-teacher.component';
import { ProfileComponent } from './screens/teacher/component/profile/profile.component';
import { ChartStudentComponent } from './screens/teacher/component/chart-student/chart-student.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { SharedMaterialModule } from './shared-material.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import bootstrapPlugin from '@fullcalendar/bootstrap';

import { FullComponent } from './layout/full.component';
import { DoctorCalendarComponent } from './screens/docter/component/doctor-calendar/doctor-calendar.component';
import { DoctorRendezVousComponent } from './screens/docter/component/doctor-rendez-vous/doctor-rendez-vous.component';
import { FullcasesComponent } from './screens/docter/component/doctor-rendez-vous/charts/fullcases/fullcases.component';
import { CancelledcasesComponent } from './screens/docter/component/doctor-rendez-vous/charts/cancelledcases/cancelledcases.component';
import { MeetingComponent } from './screens/docter/component/doctor-rendez-vous/charts/meeting/meeting.component';
import { ChildrenComponent } from './screens/docter/component/doctor-rendez-vous/charts/children/children.component';
import { ChealdrenProfileComponent } from './screens/docter/component/doctor-rendez-vous/chealdren-profile/chealdren-profile.component';
FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    NotificationComponent,
    DashboardComponent,
    ListTeacherComponent,
    ProfileComponent,
    ChartStudentComponent,
    FullComponent,
    DoctorCalendarComponent,
    DoctorRendezVousComponent,
    FullcasesComponent,
    CancelledcasesComponent,
    MeetingComponent,
    ChildrenComponent,
    ChealdrenProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    NgChartsModule,
    SharedMaterialModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
