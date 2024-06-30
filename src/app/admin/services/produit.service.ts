import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://your-backend-url/api/produits';  // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  ajouterProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }
}
