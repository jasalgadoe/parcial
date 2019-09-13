import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';
import { ThemeComponent } from './theme/theme.component'
import { AppComponent } from './app.component';


export const routes : Routes =[
    {path: 'grupoa', component: AppComponent,
    children: [
        {path: '', loadChildren:'./grupoa/grupoa.module#GrupoaModule',}
    ]},
    
    {path: 'grupob', component: AppComponent,
    children: [
        {path: '', loadChildren:'./grupob/grupob.module#GrupobModule',}
    ]}
]



@NgModule ({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
     exports:[RouterModule],providers:[]
 })
 
 export class AppRoutingModule {}
 