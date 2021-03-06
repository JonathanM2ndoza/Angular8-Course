import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search'    , component: SearchComponent, },
  { path: 'search/:text'    , component: SearchComponent, },
  { path: 'movie/:id/:page', component: MovieComponent },
  { path: 'movie/:id/:page/:searchText', component: MovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
