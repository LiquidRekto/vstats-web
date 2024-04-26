import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, computed, effect, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from "@angular/material/tree";

import { Group } from "src/app/models";
import { AvatarPipe } from "src/app/shared";
import { VTuberService } from "src/app/shared/config/vtuber.service";
import { VTubersSettingsFilter } from "./vtubers-settings-filter/vtubers-settings-filter";

interface Node {
  id: string;
  label: string;
  expandable: boolean;
  children: Node[];
}

@Component({
  standalone: true,
  imports: [
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    AvatarPipe,
    VTubersSettingsFilter,
  ],
  selector: "vts-vtubers-settings",
  templateUrl: "vtubers-settings.html",
})
export class VTubersSettings {
  private vtuberSrv = inject(VTuberService);

  treeControl = new FlatTreeControl<Node & { level: number }>(
    /* getLevel */ (node) => node.level,
    /* isExpandable */ (node) => node.expandable,
  );

  treeFlattener = new MatTreeFlattener<Node, Node & { level: number }>(
    /* transformFunction */ (node, level) => ({ ...node, level }),
    /* getLevel */ (node) => node.level,
    /* isExpandable */ (node) => node.expandable,
    /* getChildren */ (node) => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: Node) => node.expandable;

  isChecked(node: Node): boolean {
    if (node.expandable) {
      return node.children.every((node) => this.isChecked(node));
    }

    return this.vtuberSrv.selected().some((v) => v.vtuberId === node.id);
  }

  isPartiallyChecked(node: Node): boolean {
    if (node.expandable) {
      return (
        node.children.some((node) => this.isChecked(node)) &&
        node.children.some((node) => !this.isChecked(node))
      );
    }

    return this.vtuberSrv.selected().some((v) => v.vtuberId === node.id);
  }

  selectedCount = computed(() => this.vtuberSrv.selected().length);

  total = computed(() => this.vtuberSrv.totalVTubers());

  dataSourceEffect = effect(() => {
    const groups = this.vtuberSrv.groups;
    const vtubers = this.vtuberSrv.vtubers;
    const showRetired = this.vtuberSrv.showRetired();
    const nameSetting = this.vtuberSrv.nameSetting();

    const inflate = (group: Group): Node => ({
      id: group.groupId,
      expandable: true,

      label:
        group[nameSetting] || group.nativeName + ` (${group.children.length})`,

      children: group.children
        .sort((a, b) => a.localeCompare(b))
        .reduce(
          (arr, id) => {
            if (id.startsWith("vtuber:")) {
              const vtuberId = id.slice("vtuber:".length);
              const vtuber = vtubers.find((v) => v.vtuberId === vtuberId);

              if (vtuber) {
                if (showRetired || typeof vtuber.retiredAt !== "number") {
                  arr.push({
                    id: vtuberId,
                    label: vtuber[nameSetting] || vtuber.nativeName,
                    expandable: false,
                    children: [],
                  });
                }
              } else {
                console.error(`Can't find ${id}`);
              }
            } else {
              const group = groups.find(
                (g) => g.groupId === id.slice("group:".length),
              );

              if (group) {
                const node = inflate(group);
                if (node.children.length > 0) arr.push(node);
              } else {
                console.error(`Can't find ${id} `);
              }
            }

            return arr;
          },
          <Node[]>[],
        ),
    });

    this.dataSource.data = groups
      .filter((g) => g.root)
      .sort((a, b) => a.groupId.localeCompare(b.groupId))
      .map(inflate)
      .filter((g) => g.children.length > 0);
  });

  toggle(node: Node, checked: boolean) {
    if (checked) {
      this.check(node);
    } else {
      this.uncheck(node);
    }
  }

  check(node: Node): void {
    if (node.expandable) {
      return node.children.forEach((node) => this.check(node));
    }

    this.vtuberSrv.selectVTuber(node.id);
  }

  uncheck(node: Node): void {
    if (node.expandable) {
      return node.children.forEach((node) => this.uncheck(node));
    }

    this.vtuberSrv.unselectVTuber(node.id);
  }
}
