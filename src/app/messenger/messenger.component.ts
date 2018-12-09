import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-messenger",
  templateUrl: "./messenger.component.html",
  styleUrls: ["./messenger.component.css"]
})
export class MessengerComponent implements OnInit {
  @Output() conversationSelected: EventEmitter<any>;
  @Input() arrayOfConversations: any;

  conversationArray = [];
  constructor(private router: Router, private data: DataService) {
    this.conversationSelected = new EventEmitter<any>();
  }
  selectConversation(event) {
    //this.arrayOfConversations = event.results;
  }

  ngOnInit() {
    this.conversationArray = this.arrayOfConversations;
  }

  onSelect(conversation) {
    console.log(conversation);
    this.conversationSelected.emit(conversation);
    this.conversationArray.push();
  }
  signOut() {
    this.data.signOut();
    this.router.navigateByUrl("/login");
  }
}
