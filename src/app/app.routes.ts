import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
    { path: "accueil", component: AccueilComponent },
    { path: "panier", component: PanierComponent },
    { path: "", component: AccueilComponent }
];
