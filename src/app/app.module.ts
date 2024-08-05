import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CreateComponent } from "./01-intro/01-create/create.component";
import { FromEventComponent } from "./02-create/02-from-event/from-event.component";
import { ToggleStreamComponent } from "./03-toggle-stream/toggle-stream.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FromEventComponent,
    ToggleStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
