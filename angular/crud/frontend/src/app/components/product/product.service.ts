// Aula 449. Produto Service
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
// Aula 450. Método Criar Produto
import { HttpClient } from '@angular/common/http';
import { Product } from './product.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" //Aula 450. Método Criar Produto

  // A MatSnackBar é aquela pop-up preta que aparece na tela com alguma informação
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    //console.log(msg)
    this.snackBar.open(msg, 'X', { 
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Aula 450. Método Criar Produto
  // Este é o primeiro momento em que estou interagindo com o Backend
  // Aqui estou retornando um Observable do tipo Product
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  // Aula 452. Componente Obter Produto
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
