import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DemoUtilsModule} from './demo-utils/module';
import { AddAppFormComponent } from './add-appointment/add-app-form/add-app-form.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    AddAppFormComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6m8NBTg0QAzCJX8mX5f9TyG9kb2XJiDI',
      libraries: ['places']
    })
  ],

  
  providers: [AddAppFormComponent],
  bootstrap: [AppComponent],
  exports: [AddAppointmentComponent]
})
export class AppModule { }
