import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent   {
   produits = [
  { id: 1, nomProduit: 'Gateau au chocolat', categorie: 'Dessert', description: 'Délicieux gateau au chocolat fondant', taille: 'M' },
  { id: 2, nomProduit: 'Tarte aux fruits', categorie: 'Dessert', description: 'Tarte fraiche aux fruits de saison', taille: 'L' },
  { id: 3, nomProduit: 'Gateau aux amandes', categorie: 'Dessert', description: 'Gateau moelleux aux amandes effilées', taille: 'M' },
  { id: 4, nomProduit: 'Cupcake aux framboises', categorie: 'Dessert', description: 'Petits cupcakes garnis de framboises fraiches', taille: '' },
  { id: 5, nomProduit: 'Eclair au café', categorie: 'Dessert', description: 'Eclair fourré une crème au café', taille: 'L' },
  { id: 6, nomProduit: 'Millefeuille vanille', categorie: 'Dessert', description: 'Millefeuille vanille croustillant et fondant', taille: 'XL' },
  { id: 7, nomProduit: 'Cheesecake aux fruits rouges', categorie: 'Dessert', description: 'Cheesecake aux fruits rouges et biscuit sablé', taille: 'L' },
  { id: 8, nomProduit: 'Moelleux au citron', categorie: 'Dessert', description: 'Gateau moelleux au citron et sa chantilly acidulée', taille: 'M' },
];

deleteProduit(produit: any) {
  const index = this.produits.indexOf(produit);
  this.produits.splice(index, 1);
}
}