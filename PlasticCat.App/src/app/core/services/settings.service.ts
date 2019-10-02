import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    public settings: Observable<Settings>;

    constructor(
        private http: HttpClient
    ) {
        this.settings = this.http.get<Settings>('api/settings')
        .pipe(take(1));
    }
}

export class Settings {
    public app: any;
    public apiUrl: string;
};
