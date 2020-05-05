import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // Método apenas para verificar se está logado
  public usuarioLogado(): boolean {
    if ( sessionStorage.getItem('usuario-autenticado') === '1') {
      return true;
    }
    return false;
  }

  sair() {
    sessionStorage.setItem('usuario-autenticado', '');
    this.router.navigate(['/']);
  }
}
