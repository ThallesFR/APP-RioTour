import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  receivedData: string = ''; // Inicializando a variável

  constructor(private route: ActivatedRoute, private  router: Router, private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['data']) { // Usando a notação de colchetes
        this.receivedData = params['data'];
      }
    });
  }

  redirecionar(pagina : string){
    this.router.navigate([pagina])

  }

  goToDetailPage(rota: string,local: string) {
    this.router.navigate([rota], {
      queryParams: {
        data: local
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
