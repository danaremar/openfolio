import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input()
  path: string = '#'

  @Input()
  name: string = 'Section'

  @Input()
  showName: boolean = true

  @Input()
  addMarginTop: boolean = true

}
