import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
// import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component'

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & Configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  
  // import modules
  imports:      [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
// MOVE THE BELOW CODES TO ROUTING.MODULE
//    RouterModule.forRoot(
//    [
//      {
//          path: '',
//          redirectTo: '/dashboard',
//          pathMatch: 'full'
//        },
//
//      {
//          path: 'heroes',
//          component: HeroesComponent
//          },
//
//      {
//        path: 'dashboard',
//        component: DashboardComponent
//        },
//      {
//        path: 'detail/:id',
//        component: HeroDetailComponent
//      },
//   ])
//
//  ],
  // the view classes that belong to this module. 
  
  // declare component
  declarations: [ AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  HeroSearchComponent
                ],
  // provide service
  providers: [
              HeroService
              ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
