import { Component, Input } from "@angular/core";
import { tab } from "./content-header.types";

@Component({
  selector: "app-content-header",
  templateUrl: "./content-header.component.html",
  styleUrls: ["./content-header.component.scss"]
})
export class ContentHeaderComponent {
  @Input()
  public tabs?: Array<tab>;
}
