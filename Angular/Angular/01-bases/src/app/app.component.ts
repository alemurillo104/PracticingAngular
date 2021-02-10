import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : 'app.component.html'
})
export class AppComponent {
  titulo   : string = 'Contador App';
  contador : number = 0;
  base     : number = 5;

  acumular (valor : number){
    this.contador += valor;
  }
  incrementar() : void {
    this.contador++;
  }

  decrementar() : void {
    this.contador--;
  }
}
