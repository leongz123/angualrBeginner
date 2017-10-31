import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
// RxJS operator, map(), to extract heroes from the response data
    return this.http.get(`api/heroes/?name=${term}`).map(response => response.json().data as Hero[]);
  }
}
