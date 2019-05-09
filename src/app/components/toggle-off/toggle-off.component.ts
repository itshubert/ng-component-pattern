import { Component, Input } from "@angular/core";
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: "toggle-off",
  templateUrl: "./toggle-off.component.html",
  styleUrls: ["./toggle-off.component.scss"]
})
export class ToggleOffComponent {
  constructor(public toggle: ToggleComponent) {}
}
