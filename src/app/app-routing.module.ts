import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-1',
    pathMatch: 'full'
  },
  {
    path: 'login-1',
    loadChildren: () => import('./login-1/login-1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'login-2',
    loadChildren: () => import('./login-2/login-2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'tipos-de-locais',
    loadChildren: () => import('./tipos-de-locais/tipos-de-locais.module').then( m => m.TiposDeLocaisPageModule)
  },
  {
    path: 'lista-de-locais',
    loadChildren: () => import('./lista-de-locais/lista-de-locais.module').then( m => m.ListaDeLocaisPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'rota-gps',
    loadChildren: () => import('./rota-gps/rota-gps.module').then( m => m.RotaGPSPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
