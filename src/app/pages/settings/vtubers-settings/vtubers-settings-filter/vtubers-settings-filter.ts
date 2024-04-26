import { Component, inject } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { VTuberService } from "src/app/shared/config/vtuber.service";

@Component({
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule],
  selector: "vts-vtubers-settings-filter",
  templateUrl: "vtubers-settings-filter.html",
})
export class VTubersSettingsFilter {
  vtuberSrv = inject(VTuberService);
}
