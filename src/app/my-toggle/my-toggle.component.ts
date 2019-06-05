import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "my-toggle",
  templateUrl: "./my-toggle.component.html",
  styleUrls: ["./my-toggle.component.scss"]
})
export class MyToggleComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
}
