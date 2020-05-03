import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variaveis para armazenar os dados do formulario
  public email = 'root';
  public senha: string;

  constructor() { }

  ngOnInit(): void {
  }

}
