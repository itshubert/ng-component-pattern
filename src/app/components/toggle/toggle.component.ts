import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit, OnChanges, SimpleChanges } from "@angular/core";
import { ToggleOnComponent } from "../toggle-on/toggle-on.component";
import { ToggleOffComponent } from "../toggle-off/toggle-off.component";
import { ToggleButtonComponent } from "../toggle-button/toggle-button.component";

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"]
})
export class ToggleComponent implements AfterContentInit, OnChanges {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  // returns the first matching ToggleOnComponent inside <ng-content>
  // so the problem with this is we can't put multiple toggle-on etc.
  // only the first one will be picked up
  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent) toggleButton: ToggleButtonComponent;

  ngAfterContentInit() {
    this.toggleButton.toggle.subscribe(on => {
      console.log("toggleButton.toggle", on);
      this.on = on;
      this.toggle.emit(on);
      this.update();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);
    const { on } = changes;
    if (on) {
      this.update();
    }
  }

  update() {
    this.toggleOn.on = this.on;
    this.toggleOff.on = this.on;
    this.toggleButton.on = this.on;
  }

}
