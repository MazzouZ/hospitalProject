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
  addEtabToApp(appointment,etabLink){
    return this.http.put(appointment._links.etablissement.href,etabLink,
      {headers: new HttpHeaders({'Content-Type': 'text/uri-list'})})
  }
  getAppointmentsOfEtab(etablissement){
    return this.http.get(etablissement._links.appointments.href);
  }


}
