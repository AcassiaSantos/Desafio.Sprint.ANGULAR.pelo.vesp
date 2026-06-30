import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
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

  imagemAtual = this.imagens[0];
  tituloAtual = this.titulos[0];

  next() {
    this.indice++;

    if (this.indice >= this.imagens.length) {
      this.indice = 0;
    }

    this.imagemAtual = this.imagens[this.indice];
    this.tituloAtual = this.titulos[this.indice];
  }

  back() {
    this.indice--;

    if (this.indice < 0) {
      this.indice = this.imagens.length - 1;
    }

    this.imagemAtual = this.imagens[this.indice];
    this.tituloAtual = this.titulos[this.indice];
  }
}