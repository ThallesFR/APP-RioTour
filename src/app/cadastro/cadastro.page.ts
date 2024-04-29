import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string="";
  genero: string="";
  dataNascimento: string="";
  uf: string="";
  cep: string="";
  cidade: string="";
  bairro: string="";
  rua: string="";
  complemento: string="";
  email: string="";
  senha: string="";
  confirmarSenha: string="";

  constructor(private router: Router) { }

  ngOnInit() {
    // Coloque aqui o código que deve ser executado quando o componente é inicializado
  }

  register() {  
    // Validação básica dos dados do formulário
    /*if (!this.nome || !this.genero || !this.dataNascimento || !this.uf || !this.cep || !this.cidade || !this.bairro || !this.rua || !this.complemento || !this.email || !this.senha || !this.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }*/

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não correspondem.');
      return;
    }

    // Armazena as informações do formulário no localStorage
    const formValues = {
      nome: this.nome,
      genero: this.genero,
      dataNascimento: this.dataNascimento,
      uf: this.uf,
      cep: this.cep,
      cidade: this.cidade,
      bairro: this.bairro,
      rua: this.rua,
      complemento: this.complemento,
      email: this.email,
      senha: this.senha
    };
    localStorage.setItem('formValues', JSON.stringify(formValues));

    // Redireciona para a página inicial
    this.router.navigate(['/home']);
  }
}
