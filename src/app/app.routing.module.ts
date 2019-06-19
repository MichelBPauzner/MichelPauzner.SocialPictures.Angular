import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';


const routes: Routes =[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
     
    },
    {
        path: 'user/:userName', component: PhotoListComponent, 
        resolve: {
            photos: PhotoListResolver 
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'p/add', component: PhotoFormComponent, canActivate:[AuthGuard],
        data: {
            title: 'Upload'
        }
    },
    {
        path: 'p/:photoId', component: PhotoDetailsComponent,
        data: {
            title: 'Photo Detail'
        }
    },
    {
        path: 'error', component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },
    {
        path: 'not-found', component: NotFoundComponent,
        data: {
            title: 'Not Found'
        }
    },
    {
        path: '**', redirectTo: 'not-found'
    },
];


@NgModule({
    imports:[ RouterModule.forRoot(routes, { useHash: true}) ], 
    //useHash:true para evitar o carregamento das páginas pelo backend do server
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}