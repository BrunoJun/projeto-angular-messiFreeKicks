import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SelectorComponent } from './selector/selector.component';



@NgModule({
  declarations: [

    HeaderComponent,
    ListComponent,
    SelectorComponent
  ],
  exports: [

    HeaderComponent,
    ListComponent
  ],
  imports: [

    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
