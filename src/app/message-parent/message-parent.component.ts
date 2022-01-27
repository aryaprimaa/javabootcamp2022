import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "../model/message";


@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.component.html',
  styleUrls: ['./message-parent.component.css']
})
export class MessageParentComponent implements OnInit {

  form!: FormGroup;
  sendMessage!: Message;

  constructor(private formBuild: FormBuilder) {
    this.form = this.formBuild.group({
      'name': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }


  sendChild(): void {
    let pesan = <Message>{};
    pesan.name = this.form.controls['name'].value;
    pesan.message = this.form.controls['message'].value;
    this.sendMessage = pesan;
  }

  getChild($event:any): void {
    console.log($event);
    this.form.controls["nama"].setValue($event.name);
    this.form.controls["message"].setValue($event.message)
  }
}
