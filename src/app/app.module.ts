import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/home/player/player.component';
import { HomeComponent } from './components/home/home.component';
import { AddPlayerComponent } from './components/home/add-player/add-player.component';
import { CounterComponent } from './components/home/counter/counter.component';
import { HeaderComponent } from './components/home/header/header.component';
import { StopWatchComponent } from './components/home/stop-watch/stop-watch.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomeComponent,
    AddPlayerComponent,
    CounterComponent,
    HeaderComponent,
    StopWatchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
