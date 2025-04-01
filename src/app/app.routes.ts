import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { EventsU6Component } from './pages/events-u6/events-u6.component';
import { TestsComponent } from './pages/tests/tests.component';

export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'events', component: EventsComponent },
    { path: 'eventsU6', component: EventsU6Component },
    { path: 'timeline', component: TimelineComponent },
    { path: 'tests', component: TestsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFound404Component}
];
