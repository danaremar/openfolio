import { Component } from '@angular/core';
import { services } from 'src/assets/config';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = services

}
