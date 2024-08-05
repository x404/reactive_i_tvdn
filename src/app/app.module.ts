import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CreateComponent } from "./01-intro/01-create/create.component";
import { FromEventComponent } from './02-create/02-from-event/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
