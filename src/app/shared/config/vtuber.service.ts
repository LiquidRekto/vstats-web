import { Injectable, computed, inject } from "@angular/core";

import { localStorageSignal } from "src/utils";
import { CATALOG_CHANNELS, CATALOG_GROUPS, CATALOG_VTUBERS } from "../tokens";

@Injectable({ providedIn: "root" })
export class VTuberService {
  showRetired = localStorageSignal<boolean>("vts:showRetired", true);

  nameSetting = localStorageSignal<
    "nativeName" | "englishName" | "japaneseName"
  >("vts:nameSetting", "nativeName");

  private selectedIds = localStorageSignal<string[]>("vts:vtuberSelected", []);

  vtubers = inject(CATALOG_VTUBERS);
  channels = inject(CATALOG_CHANNELS);
  groups = inject(CATALOG_GROUPS);

  vtuberNames = computed(() => {
    const nameSetting = this.nameSetting();

    return this.vtubers.reduce(
      (acc, i) => {
        acc[i.vtuberId] = i[nameSetting] || i.nativeName;
        return acc;
      },
      {} as Record<string, string>,
    );
  });

  selected = computed(() => {
    const ids = this.selectedIds();

    let f = this.vtubers.filter((v) => ids.includes(v.vtuberId));

    if (!this.showRetired()) {
      f = f.filter((v) => typeof v.retiredAt !== "number");
    }

    return f;
  });

  totalVTubers = computed(() => {
    if (!this.showRetired()) {
      return this.vtubers.filter((v) => typeof v.retiredAt !== "number").length;
    }
    return this.vtubers.length;
  });

  selectedChannels = computed(() => {
    const selected = this.selected();
    return this.channels.filter((c) =>
      selected.some((v) => v.vtuberId == c.vtuberId),
    );
  });

  unselectVTuber(id: string) {
    this.selectedIds.update((arr) => {
      const index = arr.indexOf(id);
      if (index !== -1) {
        const a = [...arr];
        a.splice(index, 1);
        return a;
      }

      return arr;
    });
  }

  selectVTuber(id: string) {
    this.selectedIds.update((arr) => {
      if (!arr.includes(id)) {
        return [...arr, id];
      }

      return arr;
    });
  }
}
