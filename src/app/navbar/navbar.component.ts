import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { features } from 'src/assets/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  features = features

  constructor(private themeService: ThemeService, private renderer: Renderer2) {

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
