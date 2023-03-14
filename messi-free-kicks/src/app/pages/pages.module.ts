import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Modules
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { WatchComponent } from './watch/watch.component';



@NgModule({
  declarations: [
    HomeComponent,
    WatchComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
