import { Injectable } from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  addEtabToApp(etab,appointmentLink){
    return this.http.put(etab._links.etablissement.href,appointmentLink,
      {headers: new HttpHeaders({'Content-Type': 'text/uri-list'})})
  }
}
