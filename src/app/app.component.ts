import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "advanced-ng-pattern";

  onToggle(on) {
    console.log("in app-component toggle", on);
  }
}
