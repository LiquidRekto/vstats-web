import { Component, ViewEncapsulation, output } from "@angular/core";

@Component({
  standalone: true,
  selector: "vts-keyword-filter",
  template: `
    <input
      i18n-placeholder="@@search"
      placeholder="Search"
      class="keyword-filter rounded-full tracking-wider"
      (change)="handleChange($event)"
    />
  `,
  styleUrls: ["./keyword-filter.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class KeywordFilter {
  handleChange = ($event: any) => {
    this.onChange.emit($event.target.value);
  };

  onChange = output<string>();
}
