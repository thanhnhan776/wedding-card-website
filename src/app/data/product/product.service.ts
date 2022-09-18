import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/product/product.json');
  }

  getProduct(productId: number): Observable<Product | undefined> {
    return this.http.get<Product[]>('assets/data/product/product.json').pipe(
      map((products: Product[]) => {
        return products.find((product: Product) => product.id === productId);
      })
    );
  }
}
