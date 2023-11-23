import { Component } from '@angular/core';
import { contacts } from 'src/assets/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts = contacts

  openLink(link: string) {
    window.open(link, '_blank')
  }

}
