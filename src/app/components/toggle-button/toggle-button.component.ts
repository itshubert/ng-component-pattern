import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.scss"]
})
export class ToggleButtonComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.on = !this.on; // what's the point of this if we're reassigning the value inside toggle.component?
    this.toggle.emit(this.on);
  }
}
