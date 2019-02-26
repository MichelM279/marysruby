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
    'Champion KfT',
    'KfT Jugendchampion',
    'Luxemburg Champion'
  ];

  titleListEn: String[] = [
    'KfT Champion',
    'KfT Youth Champion',
    'Luxemburg Champion'
  ];

  factsDe: String[] = [
    'Widerristhöhe 49cm',
    'HD-A2 ED-0/0 Eyes-clear',
    'PLN-N/N Homozygous normal',
    'AY/AY',
    'B/B'
  ];

  factsEn: String[] = [
    'Height at withers 49cm',
    'HD-A2 ED-0/0 Eyes-clear',
    'PLN-N/N Homozygous normal',
    'AY/AY',
    'B/B'
  ];


  constructor() { }

  ngOnInit() {
  }

}
