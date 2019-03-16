import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ella',
  templateUrl: './ella.component.html',
  styleUrls: ['./ella.component.scss']
})
export class EllaComponent implements OnInit {

  // tslint:disable-next-line:quotemark
  name = "Sophisticated Wheaten Noelle 'Ella'";

  factsDe: String[] = [
    'Geb. 13.11.2013',
    'Widerristhöhe 44cm',
    'ZZP 22.07.2017 angekört'
  ];

  factsEn: String[] = [
    'Born 13.11.2013',
    'Height at withers 44cm',
    'breeding examination 22.07.2017'
  ];

  constructor() { }

  ngOnInit() {
  }

}
