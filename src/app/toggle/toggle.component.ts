import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from "@angular/core";

@Component({
  exportAs: "toggle",
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"]
})
export class ToggleComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  label = "ToggleComponent";

  toggle = () => {
    this.setOnState(!this.on);
  }

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }
}
