import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <h1>{{title}}</h1>
             <nav> 
             <a routerLink="/heroes">Heroes</a>
         <!--- the heroes link is linking to HeroesComponent(View) and already delcared it in AppModule -->
             <a routerLink="/dashboard">Dashboard</a>
             </nav>  
             <router-outlet></router-outlet> 
         <!--- router-outlet tells where the router to display the component ---> 
  `
})

export class AppComponent {
  title = 'Tour of Heroes';

}
