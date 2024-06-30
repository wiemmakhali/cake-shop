import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-ajout',
  templateUrl: './categories-ajout.component.html',
  styleUrls: ['./categories-ajout.component.css']
})
export class CategoriesAjoutComponent {
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
