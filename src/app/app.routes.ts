import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { EventsU6Component } from './pages/events-u6/events-u6.component';
import { TestsComponent } from './pages/tests/tests.component';
import { AuthGuard } from './core/components/guard/auth.guard';
import { LoginComponent } from './core/components/login/login.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { ClubParty2025Component } from './pages/club-party-2025/club-party-2025.component';
import { MusicComponent } from './pages/music/music.component';
import { IncroyablesTalents2025Component } from './pages/incroyables-talents2025/incroyables-talents2025.component';

export const routes: Routes = [
    
    { path: 'home', component: HomeComponent, data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'players', component: PlayersComponent, data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'volunteers', component: VolunteersComponent, data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'clubParty2025', component: ClubParty2025Component, data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'incroyablesTalents2025', component: IncroyablesTalents2025Component, data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'music', component: MusicComponent, data: { role: 'public' }, canActivate: [AuthGuard] },
    // { path: 'about', component: AboutComponent , data: { role: 'public' }, canActivate: [AuthGuard] },
    // { path: 'events', component: EventsComponent , data: { role: 'public' }, canActivate: [AuthGuard] },
    // { path: 'eventsU6', component: EventsU6Component , data: { role: 'public' }, canActivate: [AuthGuard] },
    // { path: 'timeline', component: TimelineComponent , data: { role: 'public' }, canActivate: [AuthGuard] },
    // { path: 'tests', component: TestsComponent , data: { role: 'public' }, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: NotFound404Component}
];
