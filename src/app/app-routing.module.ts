import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redireccionarlogin = () => redirectUnauthorizedTo(['/login']);


const routes: Routes = [
  {
    path: 'nombre/home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-dispo',
    loadChildren: () => import('./pages/menu-dispo/menu-dispo.module').then( m => m.MenuDispoPageModule)
  },
  {
    path: 'menu-soli',
    loadChildren: () => import('./pages/menu-soli/menu-soli.module').then( m => m.MenuSoliPageModule)
  },
  {
    path: 'login-registro',
    loadChildren: () => import('./pages/login-registro/login-registro.module').then( m => m.LoginRegistroPageModule)
  },
  {
    path: 'login-recuperacion',
    loadChildren: () => import('./pages/login-recuperacion/login-recuperacion.module').then( m => m.LoginRecuperacionPageModule)
  },
  {
    path: 'login-recuperacion-correo',
    loadChildren: () => import('./pages/login-recuperacion-correo/login-recuperacion-correo.module').then( m => m.LoginRecuperacionCorreoPageModule)
  },
  {
    path: 'menu-soli-confirmacion',
    loadChildren: () => import('./pages/menu-soli-confirmacion/menu-soli-confirmacion.module').then( m => m.MenuSoliConfirmacionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'agregar-vehiculo',
    loadChildren: () => import('./pages/agregar-vehiculo/agregar-vehiculo.module').then( m => m.AgregarVehiculoPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./pages/agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'menu-restablecer',
    loadChildren: () => import('./pages/menu-restablecer/menu-restablecer.module').then( m => m.MenuRestablecerPageModule)
  },
  {
    path: 'info-auto',
    loadChildren: () => import('./modals/info-auto/info-auto.module').then( m => m.InfoAutoPageModule)
  },
  {
    path: 'perfil-modal',
    loadChildren: () => import('./modals/perfil-modal/perfil-modal.module').then( m => m.PerfilModalPageModule)
  },
  {
    path: 'info-usuario',
    loadChildren: () => import('./modals/info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
