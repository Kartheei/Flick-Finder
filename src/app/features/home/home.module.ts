import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PopularMoviesComponent,
    TrendingMoviesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
