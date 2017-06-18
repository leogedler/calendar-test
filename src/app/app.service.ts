import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http) { }


    // Get all method
    getHoliday(country:string = 'US', year:string = '2016'): Observable<any> {
        const parms = new URLSearchParams();
        parms.set('key', '810d7c77-b0b1-4756-ad13-e958435897f9');
        parms.set('country', country);
        parms.set('year', year)
        return this.http.get('https://holidayapi.com/v1/holidays', { search: parms })
            .map((response: Response) => response.json())
            .do((response: Response) => {
            })
            .catch(this.handleError)
    }

    private handleError (error: any) {
      console.log(error);
      return Observable.throw(error.json());
    }

}
