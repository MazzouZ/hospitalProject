import { Injectable } from '@angular/core';
import {endOfMinute, startOfMinute} from 'date-fns';
import {colors} from '../consts/consts';
import {CalendarEvent} from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: CalendarEvent[] = [];
  date1 = new Date('January 19, 2021 15:00:00');
  date2 = new Date('January 19, 2021 16:00:00');
  date3 = new Date('January 18, 2021 09:00:00');

  constructor() { }

  getAppointments (){
    return [
      ...this.appointments,
      {
        title: "occupé",
        start: startOfMinute(this.date1),
        end: endOfMinute(new Date(this.date1.getTime() + 30 * 60000)),
        color: colors.red
      },
      {
        title: "occupé",
        start: startOfMinute(this.date2),
        end: endOfMinute(new Date(this.date2.getTime() + 30 * 60000)),
        color: colors.red
      },
      {
        title: "occupé",
        start: startOfMinute(this.date3),
        end: endOfMinute(new Date(this.date3.getTime() + 30 * 60000)),
        color: colors.red
      }
    ];
  }
  addAppointment(appointment){
    console.log(appointment);
  this.appointments=[...this.appointments,{
    title: "occupé",
    start: startOfMinute(appointment.startDate),
    end: endOfMinute(appointment.endDate),
    color: colors.red
  }];
  }
}
