import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SwitchComponent } from "./components/switch/switch.component";

import { MyToggleComponent } from "./my-toggle/my-toggle.component";
import { ToggleModule } from "./toggle/toggle.module";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    MyToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
