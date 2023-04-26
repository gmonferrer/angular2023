import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

const app_routes: Routes = [
  { path: '', component: PortfolioComponent }, //Ruta principal
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  //Totes les altres rutes que no existeixin a les anteriors
];

//decorador para imoportaciones y exportaciones
@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}