import { Component, Input } from "@angular/core";
import { ToggleProviderDirective } from "src/app/directives/toggleProvider.directive";

@Component({
  selector: "toggle-on",
  templateUrl: "./toggle-on.component.html",
  styleUrls: ["./toggle-on.component.scss"]
})
export class ToggleOnComponent {
  constructor(public toggleProvider: ToggleProviderDirective) {}
}
