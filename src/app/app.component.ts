import { Component, ViewContainerRef, TemplateRef, ContentChild, ViewChild } from "@angular/core";
import { ToggleProviderDirective } from "./directives/toggleProvider.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "advanced-ng-pattern";
  myLabel = "The toggle is";
  someOtherText = "Some other text";

  @ViewChild("myToggleProvider") toggleProvider: ToggleProviderDirective;

  constructor() {

  }

  onToggle(message, on) {
    console.log("in app-component toggle", message, on);
    console.log("ToggleProviderDirective constructor name: ", this.toggleProvider.constructor.name);
    console.log("ToggleProviderDirective on state is", this.toggleProvider.toggle.on);
  }
}
