import { Error404Component } from "./app/errors/404.component";

import {
  EventsListComponent,
  EventDetailComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './app/events/index';

export const appRoutes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./app/user/user.module').then(m => m.UserModule)
  }
]
