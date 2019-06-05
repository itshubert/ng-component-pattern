import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public on = true;
  label = "AppComponent";

  onToggle(message, on) {
    console.log(message, on);
  }
}
