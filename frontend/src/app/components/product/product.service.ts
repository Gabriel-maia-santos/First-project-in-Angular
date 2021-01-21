import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //link da api
  baseUrl= "http://localhost:5001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //Enviando Mensagem para quando produto for cadastrado
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  //Criando Create de Produtos
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  //Listando Produtos Cadastrados
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}