import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxChessBoardModule } from 'ngx-chess-board'

import { AppComponent } from './app.component';
import { ConfigComponent } from './components/config.component';
import { ChessComponent } from './components/chess.component';
import {RouterModule, Routes} from '@angular/router';
import {ChessService} from './chess-service';

const appRoutes: Routes = [
	{ path: '', component: ConfigComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent, ChessComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
	  RouterModule.forRoot(appRoutes, { useHash: true }),
	  NgxChessBoardModule.forRoot()
  ],
  providers: [ ChessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
