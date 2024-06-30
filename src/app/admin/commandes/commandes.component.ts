import { Component } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {
  deleteOrder(id: number) {
    // Logique de suppression de la commande avec l'ID donné
    console.log('Supprimer la commande avec l\'ID : ', id);
  }
}