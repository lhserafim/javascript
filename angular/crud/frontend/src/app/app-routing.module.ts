import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

// Aula 442. Navegando entre Componentes
// Adicionar rotas dentro do array Routes
const routes: Routes = [
  {
    path: "", // raiz
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  { // Aula 445. Componente Criar Produto
    path: "products/create",
    component: ProductCreateComponent
  },
  { // Aula 459. Componente Atualizar Produto #01
    path: "products/update/:id", // passando um id como parametro
    component: ProductUpdateComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
