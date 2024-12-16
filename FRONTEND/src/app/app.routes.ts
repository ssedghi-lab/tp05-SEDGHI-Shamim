import { Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  { path: 'panier', component: PanierComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '**', component: CatalogueComponent }
];