import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
      private router: Router ) { } // Aula 449. Produto Service - Injeção de dep. automática

  ngOnInit(): void {
  }

  // Aula 449. Produto Service
  // o void é o retorno
  createProduct(): void {
    this.productService.showMessage('Operação realizada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
