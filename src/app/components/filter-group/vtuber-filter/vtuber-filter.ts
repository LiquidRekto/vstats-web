import { Overlay } from "@angular/cdk/overlay";
import {
  Component,
  computed,
  inject,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule, MatSelectionListChange } from "@angular/material/list";
import {
  MAT_MENU_SCROLL_STRATEGY,
  MatMenuModule,
  MatMenuTrigger,
} from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";

import { AvatarPipe, NamePipe } from "src/app/shared";
import { VTuberService } from "src/app/shared/config/vtuber.service";

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
  providers: [
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: (overlay: Overlay) => () => overlay.scrollStrategies.close(),
    },
  ],
})
export class VTuberFilter {
  private vtubers = inject(VTuberService);

  selected: Set<string> = new Set();

  _vtubers = computed(() => {
    const searchText = this.searchText();

    let f = this.vtubers.selected();

    if (searchText.length > 0) {
      f = f.filter(
        (v) =>
          v.englishName?.toLocaleLowerCase().includes(searchText) ||
          v.japaneseName?.toLocaleLowerCase().includes(searchText) ||
          v.nativeName?.toLocaleLowerCase().includes(searchText),
      );
    }

    return f;
  });

  selectedChange = output<Set<string>>();

  searchText = signal("");

  filterMenuTrigger = viewChild.required<MatMenuTrigger>("filterMenuTrigger");

  handleOnSearchChange(e: EventTarget) {
    this.searchText.set((<HTMLInputElement>e).value.trim().toLowerCase());
  }

  public clear() {
    this.filterMenuTrigger().closeMenu();
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
