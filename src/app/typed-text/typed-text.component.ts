import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-typed-text',
  templateUrl: './typed-text.component.html',
  styleUrl: './typed-text.component.scss'
})
export class TypedTextComponent implements AfterViewInit {

  @Input()
  list: Array<string> = []

  @Input()
  typeSpeed: number = 35

  @Input()
  delay: number = 3000

  @Input()
  class: string = ''

  @Input()
  loop: boolean = true

  @Input()
  smartBackspace: boolean = true

  ngAfterViewInit(): void {
    const options = {
      strings: this.list,
      typeSpeed: this.typeSpeed,
      loop: this.loop,
      backDelay: this.delay,
      // fadeOut: true,
    };

    const typed = new Typed('#typedText', options);
  }

}
