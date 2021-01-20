import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import { AuthComponent } from './Auth/auth/auth.component';
import { DetailmapComponent } from './map/detailmap/detailmap.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: 'add-appointment', component: AddAppointmentComponent},
  {path: 'mp', component: MapComponent},
  {path: 'Detailmp', component: DetailmapComponent},
  {path: 'Login',component : AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
