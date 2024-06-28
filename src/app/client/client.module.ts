import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProduitsComponent,
    AProposComponent,
    ContactComponent,
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
