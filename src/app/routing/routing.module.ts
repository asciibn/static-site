import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from '../media/photos/photos.component';
import { AlbumsComponent } from '../media/albums/albums.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent, children: [{path: 'photos', component: PhotosComponent}]},
  //{path: 'photos', children: [{path: '', component: PhotosComponent}, {path: ':id', component: PhotosComponent}]},
  {path: 'albums', component: AlbumsComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true})
  ]
})
export class RoutingModule { }
