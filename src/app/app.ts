import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Cabecalho,
    Rodape
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}