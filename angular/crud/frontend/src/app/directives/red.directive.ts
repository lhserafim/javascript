import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' // Seletor da minha diretiva
})
export class RedDirective {

  // Aula 443. Diretivas na Prática #01
  // Usando o principio da injeção de dependência
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b' // Cor vermelho em hexa
  }

}
