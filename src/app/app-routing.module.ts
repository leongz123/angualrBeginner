/*
    *The Routing Module pulls the routes into a variable. 
        The variable clarifies the routing module pattern in case you export the module in the future.
    *The Routing Module adds RouterModule.forRoot(routes) to imports.
    *The Routing Module adds RouterModule to exports so that the components 
        in the companion module have access to Router declarables, such as RouterLink and RouterOutlet.
    *There are no declarations. Declarations are the responsibility of the companion module.
    *If you have guard services, the Routing Module adds module providers. (There are none in this example.)
 */

    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    import { DashboardComponent }   from './dashboard.component';
    import { HeroesComponent }      from './heroes.component';
    import { HeroDetailComponent }  from './hero-detail.component';

    const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes',     component: HeroesComponent }
    ];

    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ] // export RouterModule so that appModule can use it.
    })
    export class AppRoutingModule {}