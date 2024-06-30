import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
 
  // Méthode pour gérer la modification d'un utilisateur
  editUser(userId: number) {
    // Logique pour la modification de l'utilisateur avec l'ID spécifié
    console.log('Modifier utilisateur avec ID:', userId);
  }

  // Méthode pour gérer la suppression d'un utilisateur
  deleteUser(userId: number) {
    // Logique pour la suppression de l'utilisateur avec l'ID spécifié
    console.log('Supprimer utilisateur avec ID:', userId);
  }

}