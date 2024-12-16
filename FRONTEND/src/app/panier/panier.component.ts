import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { PanierState } from '../states/panier.state';
import { RemoveProduit } from '../states/panier.actions';
import { Observable } from 'rxjs';
import { Produit } from '../states/produit.model';

@Component({
    selector: 'app-panier',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './panier.component.html',
    styleUrl: './panier.component.css'
})
export class PanierComponent {
  produits$!: Observable<Produit[]>;

  constructor(private store: Store) {
    this.produits$ = this.store.select(PanierState.produits);
  }

  supprimerProduit(produit: Produit) {
    this.store.dispatch(new RemoveProduit(produit.id)); 
  }
}