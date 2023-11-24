import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { contacts, features, languages } from "src/assets/config";
import { configEn } from "src/assets/langs/config.en";
import { configEs } from "src/assets/langs/config.es";
import { ConfigService } from "./config.service";

@Injectable()
export class GenericComponent {

    languages = languages
    selectedLanguage = this.languages.default
    features = features
    contacts = contacts

    constructor(public translate: TranslateService, private configService: ConfigService) {
        this.translate.setDefaultLang(languages.default)
        this.setConfiguration(languages.default)
    }

    changeLanguage(lang: string) {
        this.translate.use(lang)
        this.setConfiguration(lang)
        this.selectedLanguage = lang
    }

    setConfiguration(lang: string) {
        if (lang == 'en') {
            this.configService.configuration = configEn
        }
        if (lang == 'es') {
            this.configService.configuration = configEs
        }
    }

    get profile() {
        return this.configService.configuration.profile
    }

    get qualifications() {
        return this.configService.configuration.qualifications
    }
    get experience() {
        return this.configService.configuration.experience
    }

    get skills() {
        return this.configService.configuration.skills
    }

    get softskills() {
        return this.configService.configuration.softskills
    }

    get products() {
        return this.configService.configuration.products
    }

    get services() {
        return this.configService.configuration.services
    }

    openLink(link: string) {
        window.open(link, '_blank')
    }

}