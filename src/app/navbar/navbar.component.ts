import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/theme.service';
import { GenericComponent } from '../generic.component';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends GenericComponent implements OnInit {

  constructor(private themeService: ThemeService, private renderer: Renderer2, translate: TranslateService, configService: ConfigService) {
    super(translate, configService)
  }

  ngOnInit(): void {
    this.changeTheme(this.themeService.getTheme())
  }

  switchTheme() {
    this.changeTheme(this.themeService.switchTheme())
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme)
    const body = document.querySelector('html');
    this.renderer.removeAttribute(body, "data-bs-theme")
    this.renderer.setAttribute(body, "data-bs-theme", theme)
  }

}
