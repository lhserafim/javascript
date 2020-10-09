import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.module';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Aula 450. Método Criar Produto
  product: Product = { 
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
      private router: Router ) { } // Aula 449. Produto Service - Injeção de dep. automática

  ngOnInit(): void {
  }

  // Aula 449. Produto Service
  // o void é o retorno
  createProduct(): void {
    //Aula 450. Método Criar Produto
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação realizada com sucesso!')
      this.router.navigate(['/products'])  
    }) 
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
