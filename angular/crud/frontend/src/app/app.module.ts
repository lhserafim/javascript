import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core'; // Aula 456. Tabela Produtos - Importar o LOCALE_ID para trabalhar com . , no padrão BR

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

// Aula 435. Componente Cabeçalho - Importar o módulo que tem o toolbar
import { MatToolbarModule} from '@angular/material/toolbar'; 

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

// Aula 437. Componente Navegação - Importar o sidenav e list p/ usar no nav
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
// Aula 441. Componente Início (Home)
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
// Aula 447. Navegar para Tela de Criar Produtos
import { MatButtonModule } from '@angular/material/button';
// Aula 449. Produto Service
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Aula 450. Método Criar Produto
import {HttpClientModule} from '@angular/common/http';
// Aula 451. Formulário Criar Produto
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Aula 452. Componente Obter Produto
import { ProductReadComponent } from './components/product/product-read/product-read.component';
// Aula 454. Gerando Componente Tabela
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// Aula 456. Tabela Produtos
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common' 

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,    
  ],
  providers: [{ //Aula 456. Tabela Produtos
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
