import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-doctor-calendar',
  templateUrl: './doctor-calendar.component.html',
  styleUrls: ['./doctor-calendar.component.css'],
})
export class DoctorCalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'prev,next',
    },
    allDaySlot: false,
    initialView: 'timeGridDay',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventMinWidth: 60,
    events: [
      {
        title: 'event 1',
        start: '2022-03-26 08:00:00',
        //start: '08:00:00',
        end: '2022-03-26 08:34:34',
        backgroundColor: 'green',
        borderColor: 'green',
      },

      {
        title: 'event 1',
        start: '2022-03-26 08:40:00',
        //start: '08:00:00',
        end: '2022-03-26 09:34:34',
        backgroundColor: 'green',
        borderColor: 'green',
      },
      { title: 'event 2', date: '2020-03-26' },
    ],
    eventTimeFormat: {
      // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: false,
    },
    slotLabelFormat: {
      // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: false,
    },
    slotMinTime: '08:00:00',
    slotMaxTime: '16:00:00',
    //slotTimeFormat: 'H:mm',
    slotDuration: '00:15:00',
    slotLabelInterval: 15,
    //slotLabelFormat: 'h:mm a',
  };

  /* calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-03-26' },
      { title: 'event 2', date: '2019-04-02' },
    ],
  }; */

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}
