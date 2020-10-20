import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  // Aula 460. Componente Atualizar Produto #02
  //product: Product
  // Alterado p/ evitar o erro: undefined is not an object
  product: Product = { 
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // fazendo o esquema para que quando editar, já carregar os dados no formulário
    const id = +this.route.snapshot.paramMap.get('id') // o + serve para transformar em number
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']) // volta p/ a tela de produtos
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
