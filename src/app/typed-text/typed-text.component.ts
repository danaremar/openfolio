import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-typed-text',
  templateUrl: './typed-text.component.html',
  styleUrl: './typed-text.component.scss'
})
export class TypedTextComponent implements AfterViewInit, OnChanges {

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

  typed: Typed | undefined;

  ngAfterViewInit(): void {
    this.build()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.build()
  }

  build() {
    if (this.typed) {
      this.typed.destroy();
    }
    const options = {
      strings: this.list,
      typeSpeed: this.typeSpeed,
      loop: this.loop,
      backDelay: this.delay,
      // fadeOut: true,
    };
    this.typed = new Typed('#typedText', options);
  }

}
