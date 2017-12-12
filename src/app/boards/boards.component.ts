import { Component, OnInit } from "@angular/core";
import { BoardCard } from "./board";
import { BoardCards } from "./mock-boards";

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.css"]
})
export class BoardsComponent implements OnInit {
  cards = BoardCards;
  boardCard: BoardCard = {
    id: 1,
    name: "Trello React clone",
    author: "DaveCodes"
  };

  constructor() {}

  ngOnInit() {}
}
