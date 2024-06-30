import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FormsModule } from '@angular/forms';
import { CategoriesAjoutComponent } from './categories-ajout/categories-ajout.component';
import { ProduitsAjoutComponent } from './produits-ajout/produits-ajout.component';
import { UtilisateursAjoutComponent } from './utilisateurs-ajout/utilisateurs-ajout.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TableauDeBordComponent,
    UtilisateursComponent,
    ProduitsComponent,
    CategoriesComponent,
    CommandesComponent,
    CategoriesAjoutComponent,
    ProduitsAjoutComponent,
    UtilisateursAjoutComponent,
  ],
  imports: [

    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class AdminModule { }
