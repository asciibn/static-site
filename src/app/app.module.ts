import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './media/photos/photos.component';
import { AlbumsComponent } from './media/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AlbumsComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
