import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  public message: string;
  constructor() {}

  handleContactClick(): void {
    this.message = "This is new text inside Contact component";
  }
  ngOnInit() {}
}
