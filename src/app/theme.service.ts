import { Injectable } from "@angular/core";

const THEME = 'theme';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    getTheme(): string {
        let theme = localStorage.getItem(THEME)
        if (!theme) {
            theme = this.detectSystemTheme()
        }
        return theme
    }

    switchTheme(): string {
        return this.getTheme() === 'dark' ? 'light' : 'dark'
    }

    setTheme(theme: string) {
        localStorage.setItem(THEME, theme)
    }

    detectSystemTheme(): string {
        const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
        let theme = 'light'
        if (darkThemeQuery.matches) {
            theme = 'dark'
        }
        return theme
    }

}