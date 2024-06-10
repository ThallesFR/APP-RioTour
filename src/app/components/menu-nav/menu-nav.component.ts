import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
})
export class MenuNavComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirecionar(pagina : string){
    this.router.navigate([pagina])

  }


}
