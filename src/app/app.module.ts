import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { Heroemodule } from './heroes/heroe.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    Heroemodule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
