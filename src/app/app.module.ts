import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LocationMapComponent } from './location-map/location-map.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { MyRidesComponent } from './my-rides/my-rides.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import {ngSelectLocation, EmitterService } from './ng2-location/browser-location';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'bookmyride', component: LocationMapComponent},
    {path: 'customersupport', component: CustomerSupportComponent},
    {path: 'myrides', component: MyRidesComponent},
    {path: 'emergencycontacts', component: EmergencyContactComponent},
  ]},
  {path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LocationMapComponent,
    LoginComponent,
    SignUpComponent,
    CustomerSupportComponent,
    MyRidesComponent,
    EmergencyContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3wzyVBSujdokt4YclYkdpNu-624CjFN4'
    }),
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
