import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../state/product.model';

const API_URL = 'http://localhost:4300/products';

@Injectable({
  providedIn: 'root'
})
export class ProductIntegrationService {
  constructor(private httpClient: HttpClient) {}

  load(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }

  create(productToCreate: Partial<Product>): Observable<Product> {
    return this.httpClient.post<Product>(API_URL, productToCreate);
  }

  update(productToUpdate: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${API_URL}/${productToUpdate.id}`,
      productToUpdate
    );
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${API_URL}/${id}`);
  }
}
