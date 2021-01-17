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
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    AddAppFormComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    HttpClientModule,
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
    MatButtonModule

  ],
  providers: [AddAppFormComponent],
  bootstrap: [AppComponent],
  exports: [AddAppointmentComponent]
})
export class AppModule { }
