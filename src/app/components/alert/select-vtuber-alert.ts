import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
  selector: "vts-select-vtuber-alert",
  template: `
    <mat-icon
      color="primary"
      class="!w-20 !h-20 mb-4"
      svgIcon="alert-decagram-outline"
    />
    <div class="mb-8" i18n="@@channel-no-results">No results, try selecting at least one VTuber</div>
    <button class="!rounded-full" mat-stroked-button routerLink="/settings" i18n="@@select-vtuber">
      Select VTuber
    </button>
  `,
  host: { class: "my-32 text-center block" },
})
export class SelectVtuberAlert {}
