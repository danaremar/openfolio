import { Component } from '@angular/core';
import { features, profile } from 'src/assets/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'danaremar';

  features = features
  profile = profile
}
