import { Injectable } from "@angular/core";
import { configEs } from "src/assets/langs/config.es";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    configuration = configEs

}