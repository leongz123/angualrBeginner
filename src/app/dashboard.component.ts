import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [HeroService]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Define a "heroes" array property for binding in dashboard.Com.html.

  // Dependency Inject the HeroService in the constructor and hold it in a private heroService field.
  constructor(
    private heroService: HeroService) { }

 // Call the service to get heroes inside the Angular "ngOnInit()" lifeCycle hook.
    ngOnInit(): void {
      // .slice is a array.slice method that is for displaying four heroes.
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}
