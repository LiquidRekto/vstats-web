import { Component, input, output } from "@angular/core";

@Component({
  selector: "vts-chart",
  standalone: true,
  imports: [],
  template: `
    <div
      class="w-full shimmer rounded animate-pulse"
      [style.height.px]="height"
    ></div>
  `,
  host: { ngSkipHydration: "true" },
})
export class Chart {
  height = input();
  options = input();
  chartInit = output();
  loading = input();
}
