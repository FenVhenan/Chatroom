import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: "app-message-line",
  templateUrl: "./message-line.component.html",
  styleUrls: ["./message-line.component.css"]
})
export class MessageLineComponent implements OnInit {
  text: string;
  @Output() chatBox: EventEmitter<any>;
  @Input() selectedConversation;

  constructor(private router :Router, private data: DataService) {
    this.chatBox = new EventEmitter<any>();
  }

  send(text) {
    this.selectedConversation.conversation.push({
      name: "Jess",
      image:
        "https://ih0.redbubble.net/image.216441544.5583/flat,800x800,070,f.jpg",
     content: text
    });
    this.text = "";
  }

  ngOnInit() {}
  getConversations(event) {
    this.selectedConversation = event.results;
  }
}
