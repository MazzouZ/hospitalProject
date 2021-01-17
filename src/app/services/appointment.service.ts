import { Injectable } from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: CalendarEvent[] = [];
  url: string = 'http://localhost:8085/appointments'

  constructor(private http: HttpClient) { }

  getAppointments(){
     return this.http.get(this.url);
  }
  addAppointment(appointment){
     return this.http.post(this.url, appointment);
  }
}
