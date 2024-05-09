import { Component, HostListener, ViewChild, computed, inject, output, signal } from "@angular/core";
import { MatListModule, MatSelectionListChange } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AvatarPipe, NamePipe } from "src/app/shared";
import { VTuberService } from "src/app/shared/config/vtuber.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
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
  //_vtubers = this.vtubers.selected().map(v => v.vtuberId);
  _vtubers = computed(() => {
    const searchText = this.searchText();
    const vtuberIds = this.vtubers.selected().map(v => v.vtuberId);

    // If search text is not empty, search vtubers by their names containing the search string
    // Then maps into id array
    if (searchText.length > 0) {
      return this.vtubers.vtubers.filter((v) => {
        return vtuberIds.includes(v.vtuberId)
          && (v.englishName?.toLocaleLowerCase().includes(searchText)
            || v.japaneseName?.toLocaleLowerCase().includes(searchText)
            || v.nativeName?.toLocaleLowerCase().includes(searchText))
      }).map((sv) => sv.vtuberId);
    } else {
      return vtuberIds;
    }
  })

  selectedChange = output<Set<string>>();

  searchText = signal('')

  @ViewChild("filterMenuTrigger") filterMenuTrigger: MatMenuTrigger | undefined;
  @HostListener("window:scroll", [])
  // Handles scroll on close for mat-menu
  // Still wondering if there's a solution invloving scroll strategy, but this is the best I can do
  scrollHandler() {
    if (this.filterMenuTrigger) {
      this.closeMenu();
    }
  }


  handleOnSearchChange(e: EventTarget) {
    this.searchText.set((e as HTMLInputElement).value.trim().toLowerCase());
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

    // FIXME:
    this.selectedChange.emit(new Set([...this.selected]));
  }
}
