import { Express } from 'express';
import { AppConfig } from '../app.config';

export class SettingsRepo {
    private readonly baseUrl = `${AppConfig.apiUrl}/settings`;

    constructor(
        app: Express
    ) {
        app.get(this.baseUrl)
    }

    public getSettings(request, response): void {
        response.send(AppConfig);
    }
}
