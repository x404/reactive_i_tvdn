import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from "./app.component";
import { CreateComponent } from "./01-intro/01-create/create.component";
import { FromEventComponent } from "./02-create/02-from-event/from-event.component";
import { ToggleStreamComponent } from "./03-toggle-stream/toggle-stream.component";



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '01-01-create', component: CreateComponent},
  {path: '02-02-from-event', component: FromEventComponent},
  {path: '03-toggle-stream', component: ToggleStreamComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
