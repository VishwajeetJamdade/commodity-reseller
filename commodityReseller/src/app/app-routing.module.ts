import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';


const routes: Routes = [
  { path: '', redirectTo: '/routeA', pathMatch: 'full' },
  { path: 'routeA', component: RouteAComponent },
  { path: 'routeB', component: RouteBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
