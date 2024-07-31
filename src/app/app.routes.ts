import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { StoryComponent } from './story/story.component';
import { WorksComponent } from './works/works.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'service', 
    loadComponent: () => import('./service/service.component').then(m => m.ServiceComponent)
    },
    {
        path: 'story',
        loadComponent: () => import('./story/story.component').then(m => m.StoryComponent)
    },
    {
        path:'works',
        loadComponent: () => import('./works/works.component').then(m => m.WorksComponent)
    },
    {
        path: 'clients',
        loadComponent: () => import('./clients/clients.component').then(m => m.ClientsComponent)
    }
];
