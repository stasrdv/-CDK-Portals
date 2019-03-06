import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private message: string;
  constructor() {}

  handleHomeClick(): void {
    this.message = "This is new text inside Home component";
  }

  ngOnInit() {}
}
