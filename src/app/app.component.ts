import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "advanced-ng-pattern";

  onToggle(message, on) {
    console.log("in app-component toggle", message, on);
  }
}
