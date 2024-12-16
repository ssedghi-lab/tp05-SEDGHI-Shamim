import { Produit } from '../states/produit.model';

export class AddProduit {
  static readonly type = '[Panier] Add Produit';
  constructor(public payload: Produit) {}
 
}
 export class RemoveProduit {
    static readonly type = '[Panier] Remove Produit';
    constructor(public id: number) {}
  }

