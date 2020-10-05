// Aula 449. Produto Service
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // A MatSnackBar é aquela pop-up preta que aparece na tela com alguma informação
  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    //console.log(msg)
    this.snackBar.open(msg, 'X', { 
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
