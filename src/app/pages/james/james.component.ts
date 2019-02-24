import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.scss']
})
export class JamesComponent implements OnInit {

  // tslint:disable-next-line:quotemark
  name = "Ballyhara's Alroy Adare 'James'";

  constructor() { }

  ngOnInit() {
  }

}
