import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { SettingsService } from './settings.service';
import { BaseSettings } from 'src/app/app.config';
//TODO rename to BaseRepoService
export class HttpService {
    private readonly basePath: string;

     constructor(
        protected http: HttpClient,
        protected controller: string
    ) {
        this.basePath = `${BaseSettings.apiUrl}/${this.controller}`;
        
    }

    public get<TObject>(apiMethod: string = '', variable?: string): Observable<TObject> {
        var url = `${this.basePath}`;
        if(apiMethod !== '')
            url += apiMethod
        if(variable)
            url += `/${variable}`;
            
        return this.http.get<TObject>(url);
    }

    public post<TRequest, TResponse>(
        apiMethodPath: string,
        data: TRequest
    ): Observable<TResponse> {

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