import { Injectable, computed, inject, signal } from "@angular/core";

import { localStorageSignal } from "src/utils";
import {
  CATALOG_CHANNELS,
  CATALOG_GROUPS,
  CATALOG_VTUBERS,
  QUERY_CLIENT,
} from "../tokens";

@Injectable({ providedIn: "root" })
export class VTuberService {
  queryClient = inject(QUERY_CLIENT);

  allowRetired = localStorageSignal<boolean>("vts:allowRetired", false);

  nameSetting = localStorageSignal<
    "nativeName" | "englishName" | "japaneseName"
  >("vts:nameSetting", "nativeName");
  selected = localStorageSignal<string[]>("vts:vtuberSelected", []);

  selectedIds = computed(() => {
    const selected = this.selected();
    const allowRetired = this.allowRetired();
    let finalSelected = this.vtubers
    .map((v) => v.vtuberId)
    .filter((id) => selected.includes(id));

    if (!allowRetired) {
      finalSelected = finalSelected.filter((s) => !this.retiredVtuberIds.includes(s));
    }
    return finalSelected;
  });

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

  private retiredVtuberIds = this.vtubers.filter((v) => !!v.retiredAt).map((v) => v.vtuberId)

  totalVTubers = computed(() => {
    const allowRetired = this.allowRetired();
    let finalTotal = this.vtubers;
    if (!allowRetired) {
      finalTotal = finalTotal.filter((v) => !this.retiredVtuberIds.includes(v.vtuberId));
    }
    return finalTotal.length;
  })

  selectedChannels = computed(() => {
    const selected = this.selected();
    const allowRetired = this.allowRetired();
    let finalChannels = this.channels.filter((c) => selected.includes(c.vtuberId))
    if (!allowRetired) {
      finalChannels = finalChannels.filter((c) => !this.retiredVtuberIds.includes(c.vtuberId))
    }
    return finalChannels;
  });

  groupNames = computed(() => {
    const nameSetting = this.nameSetting();

    return this.groups.reduce(
      (acc, i) => {
        acc[i.groupId] = i[nameSetting] || i.nativeName;
        return acc;
      },
      {} as Record<string, string>,
    );
  });
}
