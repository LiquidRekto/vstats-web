import { Component, ViewChild, ViewEncapsulation, inject, output } from "@angular/core";
import { MatListModule, MatSelectionListChange } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AvatarPipe, NamePipe } from "src/app/shared";
import { VTuberService } from "src/app/shared/config/vtuber.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

@Component({
  standalone: true,
  imports: [
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    NamePipe,
    AvatarPipe,
    MatButtonModule,
    MatIconModule,
  ],
  selector: "vts-vtuber-filter",
  templateUrl: "vtuber-filter.html",
})
export class VTuberFilter {

  private vtubers = inject(VTuberService);

  selected: Set<string> = new Set();
  _vtubers = this.vtubers.selectedIds();

  selectedChange = output<Set<string>>();

  searchText = ''

  @ViewChild('filterMenuTrigger') filterMenuTrigger: MatMenuTrigger | undefined;
  
  handleOnSearchChange(e : EventTarget) {
    this.searchText = (e as HTMLInputElement).value.toLowerCase()

    // Resets the array
    this._vtubers = this.vtubers.selectedIds();

    // If search text is not empty, search vtubers by their names containing the search string
    // Then maps into id array
    if (this.searchText.length > 0) {
      this._vtubers = this.vtubers.vtubers.filter((v) => {
        return this._vtubers.includes(v.vtuberId) 
        && (v.englishName?.toLocaleLowerCase().includes(this.searchText) 
        || v.japaneseName?.toLocaleLowerCase().includes(this.searchText)
        || v.nativeName?.toLocaleLowerCase().includes(this.searchText))
      }).map((sv) => sv.vtuberId);
    }
  }

  public closeMenu() {
    this.filterMenuTrigger!.closeMenu();
  }

  public clear() {
    this.selected.clear();
    this.selectedChange.emit(this.selected);
  }

  onListChange(event: MatSelectionListChange) {
    event.options.forEach((option) => {
      if (option.selected) {
        this.selected.add(option.value);
      } else {
        this.selected.delete(option.value);
      }
    });

    this.selectedChange.emit(this.selected);
  }
}
