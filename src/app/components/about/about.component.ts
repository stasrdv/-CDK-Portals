import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  public message: string;
  constructor() {}

  handleAboutClick(): void {
    this.message = "This is new text inside About component";
  }

  ngOnInit() {}
}
