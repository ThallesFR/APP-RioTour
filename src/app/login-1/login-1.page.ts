import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-1',
  templateUrl: './login-1.page.html',
  styleUrls: ['./login-1.page.scss'],
})
export class Login1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirecionar(pagina : string){
    this.router.navigate([pagina])

  }

}
