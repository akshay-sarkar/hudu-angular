import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'movie', component: MovieComponent
  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
