import { Component, Input } from "@angular/core";

@Component({
  selector: "toggle-off",
  templateUrl: "./toggle-off.component.html",
  styleUrls: ["./toggle-off.component.scss"]
})
export class ToggleOffComponent {
  @Input() on: boolean;
}
