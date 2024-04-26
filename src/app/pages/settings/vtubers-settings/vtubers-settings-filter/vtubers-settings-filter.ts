import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
    standalone: true,
    imports: [
      MatCheckboxModule,
      MatExpansionModule,
    ],
    selector: "vts-vtubers-settings-filter",
    templateUrl: "vtubers-settings-filter.html",
})
export class VTubersSettingsFilter {
  @Input() allowRetired : boolean = false; // State for allowing retired talents

  setAllowRetired(allowRetired : boolean) {
    this.allowRetired = allowRetired;
    this.refreshCatalog()
  }

  refreshCatalog() : void {
    // TODO : call API for catalog for every change
    
  }

}