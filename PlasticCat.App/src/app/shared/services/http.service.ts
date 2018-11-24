import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class HttpService {
    constructor(
        protected http: HttpClient,
        protected settingsService: SettingsService,
        controller: string
    ) {
        this.basePath = `${this.settingsService.apiPath}/${controller}`
    }

    private basePath: string;

    public wrappedGet<TObject>(apiMethod: string, variable?: string): Observable<TObject> {
        var url = `${this.basePath}/${apiMethod}`;
        if(variable){
            url += `/${variable}`;
        }
        return this.http.get<TObject>(url);
    }

    /**
     * Wrapper for observable
     *
     * @apiMethodPath api method path
     * @storeName name used to store got values
     */
    // public cacheWrapper<T>(
    //     apiMethodPath: string,
    //     storeName: string): Observable<T> {

    //     var cache: string = `${storeName}Cache`;
    //     var cacheableObservable: string = `${storeName}Observable`;

    //     if (this[cache]) {
    //         return Observable.of(this[cache]);
    //     }
    //     else if (this[cacheableObservable]) {
    //         return this[cacheableObservable];
    //     }

    //     this[cacheableObservable] = this.http.get(`${this.basePath}/${apiMethodPath}`)
    //         .map((response: Response) => this[cache] = response.json())
    //         .catch(this.handleError)
    //         .share();

    //     return this[cacheableObservable];
    // }

    // public postCachedWrapper<TInput, T>(
    //     apiMethodPath: string,
    //     storeName: string,
    //     data: TInput): Observable<T> {

    //     var cache: string = `${storeName}Cache`;
    //     var cacheableObservable: string = `${storeName}Observable`;

    //     if (this[cache]) {
    //         return Observable.of(this[cache]);
    //     }
    //     else if (this[cacheableObservable]) {
    //         return this[cacheableObservable];
    //     }

    //     this[cacheableObservable] = this.post(apiMethodPath, data).share();

    //     return this[cacheableObservable];
    // }

     /**
     * Post request
     *
     * @apiMethodPath api method path
     * @data request data
     */
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

    /**
     * Error handling
     * @param response http response variable
     */
    // public handleError(error: Response | any) {
    //     let errMsg: string;

    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     }
    //     else {
    //         errMsg = error.message
    //             ? error.message
    //             : error.toString();
    //     }

    //     return Observable.throw(errMsg);
    // }
}