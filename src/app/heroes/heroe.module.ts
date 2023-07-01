import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';

//import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations:[
   ListComponent,
   HeroeComponent,
  ],
  exports:[
    ListComponent,
   HeroeComponent,
  ],
  imports:[
   CommonModule
  ]
 })


export class Heroemodule{}
