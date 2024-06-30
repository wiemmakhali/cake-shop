import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from '../services/produit.service';  // Assurez-vous que ce chemin est correct

@Component({
  selector: 'app-produits-ajout',
  templateUrl: './produits-ajout.component.html',
  styleUrls: ['./produits-ajout.component.css']
})
export class ProduitsAjoutComponent  {
  category = {
    name: '',
    description: ''
  };

  onSubmit() {
    console.log('Formulaire soumis !');
    console.log(this.category);
    // Ici vous pouvez ajouter la logique pour traiter les données du formulaire
    // Par exemple, envoyer les données au backend pour enregistrer la nouvelle catégorie
  }
}
