import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { AddProduit } from '../states/panier.actions';
import { Produit } from '../states/produit.model';

@Component({
    selector: 'app-catalogue',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './catalogue.component.html',
    styleUrl:'./catalogue.component.css'
})
export class CatalogueComponent {
  produits: Produit[] = [
    { id: 1, nom: 'Produit A', prix: 10 },
    { id: 2, nom: 'Produit B', prix: 20 },
    { id: 3, nom: 'Produit C', prix: 30 },
  ];

  constructor(private store: Store) {}

  ajouterAuPanier(produit: Produit) {
    this.store.dispatch(new AddProduit(produit));
  
  }
}
