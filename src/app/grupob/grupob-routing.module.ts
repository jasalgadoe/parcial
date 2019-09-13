import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';
import { Componente10Component } from './componente10/componente10.component';
import { GrupobComponent } from './grupob.component';


const routes: Routes = [
 
  {path:'componente6',component:Componente6Component},
{path:'componente7',component:Componente7Component},
{path:'componente8',component:Componente8Component},
{path:'componente9',component:Componente9Component},
{path:'componente10',component:Componente10Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupobRoutingModule { }
