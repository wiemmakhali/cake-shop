import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/client', pathMatch: 'full' }, // Redirection par défaut vers la partie client
  { path: '**', redirectTo: '/client' } // Gestion de routes inconnues (par exemple 404), rediriger vers la partie client
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
