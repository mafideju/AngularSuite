import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then((load) => load.ElementsModule) },
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then((load) => load.CollectionsModule) },
  { path: 'views', loadChildren: () => import('./views/views.module').then((load) => load.ViewsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
