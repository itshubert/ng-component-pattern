import { Directive, Input, Optional, Host, OnChanges, SimpleChanges } from "@angular/core";

import { ToggleDirective } from "./toggle.directive";

@Directive({
  exportAs: "toggleProvider",
  selector: "toggle, [toggle], [toggleProvider]",
})
export class ToggleProviderDirective implements OnChanges {
  @Input()
  toggleProvider: ToggleDirective;

  @Input("toggleProviderLabel")
  label: string;

  toggle: ToggleDirective = this.toggleDirective;

  constructor(
    @Host() @Optional() private toggleDirective: ToggleDirective,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const { toggleProvider, label } = changes;
    if (toggleProvider) {
      this.toggle = this.toggleProvider || this.toggleDirective;
    }

    if (label) {
      console.log("ToggleProviderLabel", this.label);
    }
  }
}
