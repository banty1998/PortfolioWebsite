import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Banty Agarwal — Senior Software Engineer',
    data: { anim: 'home' }
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project — Banty Agarwal',
    data: { anim: 'project' }
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
