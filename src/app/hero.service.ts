// The @Injectable() decorator tells TypeScript to emit metadata about the service. 
// The metadata specifies that Angular may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';
import { Hero } from './hero'; // Import the hero class
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import { HEROES } from './mock-heroes'; // Replacing by hero api

@Injectable()

export class HeroService {
  private heroesUrl = 'api/heroes'; // URL TO API

  private headers = new Headers({ 'Content-Type' : 'application/json' });

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getHeroesSlowly(): Promise<Hero[]> {
      return new Promise(resolve => {
        // simulate server latency 2 sec delay
        setTimeout(() => resolve(this.getHeroes()), 2000);
      });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
              .toPromise()
              .then(response => response.json().data as Hero)
              .catch(this.handleError);

  }

  /*To identify which hero the server should update, 
   * the hero id is encoded in the URL. The put() body is the JSON string 
   * encoding of the hero,  obtained by calling JSON.stringify. 
   * The body content type (application/json) is identified 
   * in the request header.
   */
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
    create(name: string): Promise<Hero> {
      return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), 
                    {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
    }
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}

