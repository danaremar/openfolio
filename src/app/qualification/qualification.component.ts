import { Component } from '@angular/core';
import { profile, qualifications } from 'src/assets/config';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  qualifications = qualifications

}
