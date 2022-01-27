import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Message} from "../model/message";

@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.css']
})
export class MessageChildComponent implements OnInit {

  @Output() kirimMessages = new EventEmitter<Message>();
  @Input() message! : Message
  listMessage! : Message[]
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.listMessage) {
      this.listMessage.push(this.message)
    } else {
      if (this.message) {
        this.listMessage = [this.message];
      }
    }
  }

  ngOnInit(): void {
  }

  edit(i:number):void {
    this.kirimMessages.emit(this.listMessage[i])
}

}
