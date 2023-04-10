import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SelectorComponent } from './selector/selector.component';
import { HomeComponent } from '../pages/home/home.component';



@NgModule({
  declarations: [

    HeaderComponent,
    ListComponent,
    SelectorComponent
  ],
  exports: [

    HeaderComponent,
    ListComponent,
    SelectorComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
