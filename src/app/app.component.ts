import { Component } from "@angular/core";
import { tab } from "./content-header/content-header.types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title: string = "smashTracker";
  public tabs: Array<tab> = [
    { name: "home", path: "/home" },
    { name: "table", path: "/table" }
  ];
}
