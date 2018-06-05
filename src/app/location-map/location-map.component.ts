import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
// import {} from '@types/googlemaps';
//  import {ngSelectLocation, EmitterService } from '../ng2-location/browser-location';

@Component({
  selector: 'app-location-map',
  // providers: [EmitterService],
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {
  lat: number;
  lng: number;
  isTracking;
  currentLat;
  currentLong;
  map;
  marker;
//   public selectedCity: any;
//  constructor(private emitterService: EmitterService, private router: Router) {
//  window.localStorage.removeItem('city');
//  }
  ngOnInit() {
    this.lat = 22.5726;
    this.lng = 88.3639;
//     this.selectedCity = localStorage.getItem('city');
//  EmitterService.get('selectedCity').subscribe(data => {
//  this.selectedCity = data;
//  localStorage.setItem('city', data);
//  });
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        // this.showTrackingPosition(position);
        console.log(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  // showTrackingPosition(position) {
  //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  //   this.currentLat = position.coords.latitude;
  //   this.currentLong = position.coords.longitude;

  //   const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //   this.map.panTo(location);

  //   if (!this.marker) {
  //     this.marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map,
  //       title: 'Got you!'
  //     });
  //   } else {
  //     this.marker.setPosition(location);
  //   }
  // }

}
