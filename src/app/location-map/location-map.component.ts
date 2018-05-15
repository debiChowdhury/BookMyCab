import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {
  lat: number;
  lng: number;
  constructor() { }

  ngOnInit() {
    this.lat = 88.3639;
    this.lng = 88.3639;
  }

}
