import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PushComponent } from './components/push/push.component';
import { HomeComponent } from './components/home/home.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
import { AmendComponent } from './components/amend/amend.component';
import { GraphComponent } from './components/graph/graph.component';
import { CherrypickComponent } from './components/cherrypick/cherrypick.component';

@NgModule({
  declarations: [
    AppComponent,
    PushComponent,
    HomeComponent,
    BackbuttonComponent,
    AmendComponent,
    GraphComponent,
    CherrypickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
