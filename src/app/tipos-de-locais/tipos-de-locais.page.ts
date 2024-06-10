import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipos-de-locais',
  templateUrl: './tipos-de-locais.page.html',
  styleUrls: ['./tipos-de-locais.page.scss'],
})
export class TiposDeLocaisPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {
  }

  goToDetailPage(rota: string,local: string) {
    this.router.navigate([rota], {
      queryParams: {
        data: local
      }
    });
  }
}
