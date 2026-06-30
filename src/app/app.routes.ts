import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Contato } from './componentes/contato/contato';
import { Lancamento } from './componentes/lancamento/lancamento';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'contato',
    component: Contato
  },
  {
    path: 'lancamento',
    component: Lancamento
  }
];