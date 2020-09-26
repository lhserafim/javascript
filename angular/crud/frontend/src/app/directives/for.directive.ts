// Aula 444. Diretivas na Prática #02

import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{

  // O appFor é o nome do seletor e o In é o nome que eu quiser, conforme determinado ao usar a diretiva
  // <li *appFor="let n in [1, 2, 3]"></li>
  // Ou seja, ao invés de in, eu poderia escrever qualquer groselha 
  @Input('appForIn') numbers: number[]

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      // o $implicit: number é que vai enviar o valor do for para o li
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    console.log(this.numbers)

  }
}
