import { Component, Input } from "@angular/core";
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: "toggle-on",
  templateUrl: "./toggle-on.component.html",
  styleUrls: ["./toggle-on.component.scss"]
})
export class ToggleOnComponent {
  constructor(public toggle: ToggleComponent) {}
}
