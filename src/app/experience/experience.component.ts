import { Component } from '@angular/core';
import { experience } from 'src/assets/config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experience = experience

}
