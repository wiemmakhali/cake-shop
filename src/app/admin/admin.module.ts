import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommandesComponent } from './commandes/commandes.component';

@NgModule({
  declarations: [
    TableauDeBordComponent,
    UtilisateursComponent,
    ProduitsComponent,
    CategoriesComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
