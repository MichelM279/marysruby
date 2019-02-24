import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.scss']
})
export class JamesComponent implements OnInit {

  // tslint:disable-next-line:quotemark
  name = "Ballyhara's Alroy Adare 'James'";

  titleListDe: String[] = [
    'Deutscher Champion 2018',
    'KfT Jugendchampion 2017',
    'Luxemburg Champion 2017'
  ];

  titleListEn: String[] = [
    'German Champion 2018',
    'KfT Youth Champion 2017',
    'Luxemburg Champion 2017'
  ];

  factsDe: String[] = [
    'Widerristhöhe 49cm',
    'HD-A2 ED-0/0 Eyes-clear',
    'PLN-N/N Homozygous normal',
    'AY/AY',
    'B/B'
  ];

  factsEn: String[] = [
    'Widerristhöhe 49cm',
    'HD-A2 ED-0/0 Eyes-clear',
    'PLN-N/N Homozygous normal',
    'AY/AY',
    'B/B'
  ];


  constructor() { }

  ngOnInit() {
  }

}
