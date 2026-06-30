import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  imagens = [
    'http://localhost:3001/img/ranger.png',
    'http://localhost:3001/img/mustang.png',
    'http://localhost:3001/img/territory.png',
    'http://localhost:3001/img/broncoSport.png'
  ];

  titulos = [
    'Ranger',
    'Mustang',
    'Territory',
    'Bronco Sport'
  ];

  indice = 0;

  get imagemAtual() {
    return this.imagens[this.indice];
  }

  get tituloAtual() {
    return this.titulos[this.indice];
  }

  next() {
    this.indice++;

    if (this.indice >= this.imagens.length) {
      this.indice = 0;
    }
  }

  back() {
    this.indice--;

    if (this.indice < 0) {
      this.indice = this.imagens.length - 1;
    }
  }

}