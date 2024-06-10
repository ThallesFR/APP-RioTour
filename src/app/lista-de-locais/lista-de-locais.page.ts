import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-locais',
  templateUrl: './lista-de-locais.page.html',
  styleUrls: ['./lista-de-locais.page.scss'],
})
export class ListaDeLocaisPage implements OnInit {
  receivedData: string = ''; // Inicializando a variável

  constructor(private route: ActivatedRoute, private  router: Router) {}

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
 
}
