import { Component, Input } from "@angular/core";
import { ToggleProviderDirective } from "src/app/directives/toggleProvider.directive";

@Component({
  selector: "toggle-off",
  templateUrl: "./toggle-off.component.html",
  styleUrls: ["./toggle-off.component.scss"]
})
export class ToggleOffComponent {
  constructor(public toggleProvider: ToggleProviderDirective) {}
}
