import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';
import { TwoColumnPageComponent } from './modules/two-column-page/two-column-page.component';
import { HomeComponent } from './modules/two-column-page/home/home.component';
import { WineDetailsComponent } from './modules/two-column-page/wines/wine-details/wine-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: TwoColumnPageComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'wines', component: WinesComponent },
    { path: 'wines/:id', component: WineDetailsComponent }
  ]},
  { path: 'user', 
  loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
