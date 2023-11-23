import { Component } from '@angular/core';
import { contacts, profile } from 'src/assets/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  profile = profile
  contacts = contacts

}
