import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LocationMapComponent } from './location-map/location-map.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    LocationMapComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0PZkCm7Ic8RDDVEt_3j2xjts5OD2xN_Q'
    }),
    RouterModule.forRoot([
      {
        path: '', component : LoginComponent
      }, {
        path: 'signup', component : SignUpComponent
      },
      {
        path: 'getlocation', component : LocationMapComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
