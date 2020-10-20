// Aula 449. Produto Service
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
// Aula 450. Método Criar Produto
import { HttpClient } from '@angular/common/http';
import { Product } from './product.module';
// Aula 465. Exibindo as Mensagens de Erro
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" //Aula 450. Método Criar Produto

  // A MatSnackBar é aquela pop-up preta que aparece na tela com alguma informação
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    //console.log(msg)
    this.snackBar.open(msg, 'X', { 
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] // Aula 465. Exibindo as Mensagens de Erro
    })
  }

  // Aula 450. Método Criar Produto
  // Este é o primeiro momento em que estou interagindo com o Backend
  // Aqui estou retornando um Observable do tipo Product
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe( // Aula 465. Exibindo as Mensagens de Erro
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  // Aula 452. Componente Obter Produto
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe( // Aula 465. Exibindo as Mensagens de Erro
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  // Aula 458. Novos Métodos em Produto Service
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe( // Aula 465. Exibindo as Mensagens de Erro
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe( // Aula 465. Exibindo as Mensagens de Erro
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  // Aula 462. Desafio Método Excluir Produto - Resposta
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe( // Aula 465. Exibindo as Mensagens de Erro
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //Aula 465. Exibindo as Mensagens de Erro
  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY // retornando o observable vazio
  }
}
