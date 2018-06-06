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
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {

  openMenu = false;
  menuWidth = 'inactive';
  uname;
  uphone;
  menuItems = [{
    name: 'Book my rides',
    path: '/bookmyride'
  }, {
    name: 'My rides',
    path: '/myrides'
  }, {
    name: 'Emergency contacts',
    path: '/emergencycontacts'
  }, {
    name: 'Support',
    path: '/customersupport'
  },
];
  constructor(private router: Router) { }

  ngOnInit() {
    this.uname = JSON.parse(localStorage.getItem('logged In User')).username;
    const registeredUsers = JSON.parse(localStorage.getItem('registered_user'));
    registeredUsers.forEach(user => {
      return (this.uphone = user.phoneno);
    });
  }

  toggleNav() {
    this.menuWidth = (this.menuWidth === 'inactive') ? 'active' : 'inactive' ;
  }

  onMenuItemSelected(item) {
    this.router.navigate(['/dashboard/' + item.path]);
    this.toggleNav();

  }

}
