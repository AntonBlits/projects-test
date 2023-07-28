import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    title: 'Данные',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent),
  },
  {
    path: 'projects',
    title: 'Проекты',
    loadComponent: () => import('./projects/projects.component').then(c => c.ProjectsComponent),
    children: [
      {
        path: ':projectId',
        loadComponent: () => import('./project-details/project-details.component').then(c => c.ProjectDetailsComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main',
  }
];
