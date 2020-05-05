import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variaveis para armazenar os dados do formulario
  public email = 'teste@email.com';
  public senha = 'teste@1234';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  entrar() {
    if (this.email === 'teste@email.com' && this.senha === 'teste@1234') {
      // Criando uma sessão
      sessionStorage.setItem('usuario-autenticado', '1');
      this.router.navigate(['/']);
    }
  }
}
