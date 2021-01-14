import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from "angular-calendar";
import { getDay } from "date-fns";
import {AppointmentService} from '../services/appointment.service';
import {MatDialog} from '@angular/material/dialog';
import {AddAppFormComponent} from './add-app-form/add-app-form.component';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;
  clickedColumn: number;
  today: Number;

  constructor(private appointmentService:AppointmentService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.today=getDay(new Date());
    this.getAppointments();
  }

  getAppointments(){
    this.events = this.appointmentService.getAppointments();
  }
  dateSelected(date) {
    let endDate=date.getTime() + 30 * 60000;
    if (date > new Date()) {
      const dialogRef = this.dialog.open(AddAppFormComponent, {
        width: '450px',
        data: {startDate: date,endDate: endDate}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result.email && result.number){
          this.appointmentService.addAppointment(result);
          this.events = this.appointmentService.getAppointments();
        }
      });
    }
  }

}
