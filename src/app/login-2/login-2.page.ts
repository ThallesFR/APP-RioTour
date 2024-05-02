import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-2',
  templateUrl: './login-2.page.html',
  styleUrls: ['./login-2.page.scss'],
})
export class Login2Page implements OnInit {

  email: string="";
  senha: string="";
  

  constructor(private router: Router) { }

  ngOnInit() {
    // Coloque aqui o código que deve ser executado quando o componente é inicializado
  }

  login() {
    // Redireciona para a página 'home' quando o botão de login é clicado
    this.router.navigate(['/home']);
  }

}

