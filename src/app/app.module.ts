import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LocationMapComponent } from './location-map/location-map.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationMapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0PZkCm7Ic8RDDVEt_3j2xjts5OD2xN_Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
