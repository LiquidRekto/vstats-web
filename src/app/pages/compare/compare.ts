import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { UnderConstruction } from "../under-construction/under-construction";

@Component({
    standalone: true,
    selector: "vts-compare",
    templateUrl: "compare.html",
    imports: [UnderConstruction]
  })
  export default class ComparePage {
    
  }