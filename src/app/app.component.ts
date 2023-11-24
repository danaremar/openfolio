import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { features } from 'src/assets/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'danaremar';

  features = features

  constructor(public translate: TranslateService) { }
}
