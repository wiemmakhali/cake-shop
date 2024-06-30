import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateurs-ajout',
  templateUrl: './utilisateurs-ajout.component.html',
  styleUrls: ['./utilisateurs-ajout.component.css']
})
export class UtilisateursAjoutComponent {
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