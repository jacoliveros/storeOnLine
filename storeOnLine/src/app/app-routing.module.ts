import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'index',component:IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
