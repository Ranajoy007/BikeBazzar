import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  fname: any;
  lname: any;
  @Output() sendFname: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendLname: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedBrand: any;
  constructor() { }

  ngOnInit(): void {
  }

  fnameChange() {
    this.sendFname.emit(this.fname);
  }
  lnameChange() {
    this.sendLname.emit(this.lname);
  }
}
