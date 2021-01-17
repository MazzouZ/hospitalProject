import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from "angular-calendar";
import {getDay, parseISO} from 'date-fns';
import {AppointmentService} from '../services/appointment.service';
import {MatDialog} from '@angular/material/dialog';
import {AddAppFormComponent} from './add-app-form/add-app-form.component';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {endOfMinute, startOfMinute} from 'date-fns';
import {colors} from '../consts/consts';
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

  constructor(private appointmentService:AppointmentService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.today=getDay(new Date());
    this.getAppointments();
  }

  getAppointments(){
    this.appointmentService.getAppointments().subscribe((data:any) => {
      let result = data._embedded.appointments;
      result.forEach((appointment: any) => {
          this.events =[...this.events,{
            title: "Busy",
            start: startOfMinute(parseISO(appointment.startDate)),
            end: endOfMinute(parseISO(appointment.endDate)),
            color: colors.red
          }];
      });
    },error => {
      console.log(error);
    });
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
          this.appointmentService.addAppointment(result).subscribe((data:any) => {
            this.getAppointments();
            Swal.fire("Done...", "You Appointment is succesfully submitted!", "success").then(
              value => {
                this.router.navigate(['/']);
              }
            );
          },error => {
            console.log(error);
          });
        }
      });
    }
  }

}
