import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { SettingsService } from './settings.service';

export class HttpService {
    private basePath: string = `${this.settingsService.apiPath}/${this.controller}`

     constructor(
        protected http: HttpClient,
        protected settingsService: SettingsService,
        protected controller: string
    ) {
    }

    public get<TObject>(apiMethod: string, variable?: string): Observable<TObject> {
        var url = `${this.basePath}/${apiMethod}`;
        if(variable){
            url += `/${variable}`;
        }
        return this.http.get<TObject>(url);
    }

    public post<TRequest, TResponse>(
        apiMethodPath: string,
        data: TRequest): Observable<TResponse> {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=UTF-8');

        return this.http.post<TResponse>(
            `${this.basePath}/${apiMethodPath}`,
            data,
            {
                headers: headers
            });
    }
}