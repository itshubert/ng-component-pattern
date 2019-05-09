import { Component, OnInit } from "@angular/core";
import { ToggleProviderDirective } from "src/app/directives/toggleProvider.directive";

@Component({
  selector: "other-component",
  templateUrl: "./other-component.component.html",
  styleUrls: ["./other-component.component.scss"]
})
export class OtherComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
