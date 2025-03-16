import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'map',
    loadComponent: () =>
      import('../app/pages/map/map.component').then((c) => c.MapComponent),
  },
  {
    path: 'map-tmp',
    loadComponent: () =>
      import('../app/pages/map/map-tmp/map-tmp.component').then(
        (c) => c.MapTmpComponent
      ),
  },
];
