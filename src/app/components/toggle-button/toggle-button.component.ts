import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: "toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.scss"]
})
export class ToggleButtonComponent {
  constructor(public toggle: ToggleComponent) {}

  onClick() {
    // this.on = !this.on; // what"s the point of this if we"re reassigning the value inside toggle.component?
    // this.toggle.emit(this.on);

    this.toggle.setOnState(!this.toggle.on);
  }
}
