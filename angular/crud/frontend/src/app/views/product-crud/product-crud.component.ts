import { Component, OnInit } from '@angular/core';
//Aula 447. Navegar para Tela de Criar Produtos
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { } // Aula 447. Navegar para Tela de Criar Produtos - Injeção de dependências

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    //console.log('Navegando...')
    this.router.navigate(['/products/create'])
  }

}
