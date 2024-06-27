import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})

export class HijoComponent {
/*   @Input() mensajeRecibido: string = ""; */

 @Output() enviarTexto = new EventEmitter<string>(); 

  enviarTextoAPadre(texto: string){
  this.enviarTexto.emit(texto);
}

}
