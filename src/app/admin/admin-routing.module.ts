import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CategoriesAjoutComponent } from './categories-ajout/categories-ajout.component';
import { ProduitsAjoutComponent } from './produits-ajout/produits-ajout.component';
import { UtilisateursAjoutComponent } from './utilisateurs-ajout/utilisateurs-ajout.component';
const routes: Routes = [
  { path: 'tableau-de-bord', component: TableauDeBordComponent, children: [
      { path: 'utilisateurs', component: UtilisateursComponent },
      { path: 'utilisateurs-ajout', component: UtilisateursAjoutComponent },
      { path: 'produits', component: ProduitsComponent },
      { path: 'produits-ajout', component: ProduitsAjoutComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories-ajout', component: CategoriesAjoutComponent },
      { path: 'commandes', component: CommandesComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
