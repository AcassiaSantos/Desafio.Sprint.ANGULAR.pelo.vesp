import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  imagens: string[] = [
    'http://localhost:3001/img/ranger.png',
    'http://localhost:3001/img/mustang.png',
    'http://localhost:3001/img/territory.png',
    'http://localhost:3001/img/broncoSport.png'
  ];

  titulos: string[] = [
    'Ranger',
    'Mustang',
    'Territory',
    'Bronco Sport'
  ];

  indice: number = 0;

  imagemAtual: string = this.imagens[0];
  tituloAtual: string = this.titulos[0];

  next(): void {
    this.indice++;

    if (this.indice >= this.imagens.length) {
      this.indice = 0;
    }

    this.atualizar();
  }

  back(): void {
    this.indice--;

    if (this.indice < 0) {
      this.indice = this.imagens.length - 1;
    }

    this.atualizar();
  }

  private atualizar(): void {
    this.imagemAtual = this.imagens[this.indice];
    this.tituloAtual = this.titulos[this.indice];
  }

}