import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "watch/:id", component: WatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

