import {
  Component,
  OnInit,
  style,
  animate,
  trigger,
  keyframes,
  transition,
  group,
  state
} from '@angular/core';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css'],
  animations: [
    trigger('menuWidth', [
      state('inactive', style({
        width: '0%'
      })),
      state('active',   style({
        width: '28%'
      })),
      transition('inactive <=> active', animate('0.1s ease-out'))
    ])
  ]
})
export class LocationMapComponent implements OnInit {
  lat: number;
  lng: number;
  uname;
  uphone;
  openMenu = false;
  menuWidth = 'inactive';
  constructor() {}

  ngOnInit() {
    this.lat = 22.5726;
    this.lng = 88.3639;
    this.uname = JSON.parse(localStorage.getItem('logged In User')).username;
    const registeredUsers = JSON.parse(localStorage.getItem('registered_user'));
    registeredUsers.forEach(user => {
      return (this.uphone = user.phoneno);
    });
  }

  toggleNav() {
    this.menuWidth = (this.menuWidth === 'inactive') ? 'active' : 'inactive' ;
  }

}
