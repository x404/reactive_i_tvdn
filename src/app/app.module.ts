import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CreateComponent } from "./01-intro/01-create/create.component";
import { FromEventComponent } from "./02-create/02-from-event/from-event.component";
import { ToggleStreamComponent } from "./03-toggle-stream/toggle-stream.component";
import { Comp1Component } from './04-services/comp1/comp1.component';
import { Comp2Component } from './04-services/comp2/comp2.component';
import { ServicesComponent } from "./04-services/services.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FromEventComponent,
    ToggleStreamComponent,
    ServicesComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
