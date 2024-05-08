import { Component, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

import { SidenavMenu } from "./menu";
import { UpdateIndicator } from "./update-indicator/update-indicator";

@Component({
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
    SidenavMenu,
    UpdateIndicator,
  ],
  selector: "vts-sidenav",
  templateUrl: "sidenav.html",
  styleUrls: ["sidenav.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Sidenav {
  readonly channelsItems = [
    {
      icon: "account-multiple-outline",
      title: $localize`:@@subscribers:Subscribers`,
      link: "/channel/subscribers",
    },
    {
      icon: "cash",
      title: $localize`:@@revenue:Revenue`,
      link: "/channel/revenue",
    },
    {
      icon: "eye",
      title: $localize`:@@views:Views`,
      link: "/channel/views",
    },
  ];

  readonly generalItems = [
    {
      icon: "compare-arrows",
      title: $localize`:@@compare:Compare`,
      link: "/visualize/compare"
    },
  ];

  readonly streamsItems = [
    {
      icon: "stream",
      title: $localize`:@@live-stream:Live`,
      link: "/stream/live",
    },
    {
      icon: "calendar",
      title: $localize`:@@scheduled:Scheduled`,
      link: "/stream/scheduled",
    },
  ];

  readonly extraItems = [
    {
      icon: "cog-outline",
      title: $localize`:@@settings:Settings`,
      link: "/settings",
    },
    {
      icon: "information_outline",
      title: $localize`:@@about:About`,
      link: "/about",
    },
  ];

  commitSha = (<any>window).gitCommitSha;
}
