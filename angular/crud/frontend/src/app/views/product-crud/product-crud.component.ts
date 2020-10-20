import { Component, OnInit } from '@angular/core';
//Aula 447. Navegar para Tela de Criar Produtos
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // Aula 447. Navegar para Tela de Criar Produtos - Injeção de dependências
  constructor(private router: Router, private headerService: HeaderService) {  // Aula 466. Atualizando os Títulos
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }    
  } 

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    //console.log('Navegando...')
    this.router.navigate(['/products/create'])
  }

}
