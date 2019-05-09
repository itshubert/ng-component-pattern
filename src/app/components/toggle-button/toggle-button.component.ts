import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ToggleProviderDirective } from "src/app/directives/toggleProvider.directive";

@Component({
  selector: "toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.scss"]
})
export class ToggleButtonComponent {
  constructor(public toggleProvider: ToggleProviderDirective) {}

  onClick() {
    // this <toggle-button> is wrapped in a toggle directive
    // and the ToggleProviderDirective is injecting parent ToggleDirective
    // so this.toggleProvider.toggle is the toggle directive wrapping this toggle-button
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
}
