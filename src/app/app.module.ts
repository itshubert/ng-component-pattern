import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SwitchComponent } from "./components/switch/switch.component";
import { ToggleOnComponent } from "./components/toggle-on/toggle-on.component";
import { ToggleOffComponent } from "./components/toggle-off/toggle-off.component";
import { ToggleButtonComponent } from "./components/toggle-button/toggle-button.component";
import { OtherComponentComponent } from "./components/other-component/other-component.component";
import { ToggleDirective } from "./directives/toggle.directive";
import { ToggleProviderDirective } from "./directives/toggleProvider.directive";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent,
    OtherComponentComponent,
    ToggleDirective,
    ToggleProviderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
