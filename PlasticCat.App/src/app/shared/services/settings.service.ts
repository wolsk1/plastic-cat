import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    constructor() {
        this.onInit();
    }

    public version: string;
    public basePath: string;
    public apiPath: string;
    public country: string;
    public connectionProtocol: string;
    public appName: string;

    private onInit() {
        try {
            Object.assign(this,  window["_appSettings"]);
        } catch (ex) {
            console.log((<Error>ex).message);
        }
    }
}
