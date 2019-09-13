import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';
import { ThemeComponent } from './theme/theme.component';



@NgModule({
  declarations: [
    AppComponent,
    GrupoaComponent,
    GrupobComponent,
    ThemeComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
