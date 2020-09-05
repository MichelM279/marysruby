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
    'Dt. Champion KfT',
    'KfT Jugendchampion',
    'Luxemburg Champion',
    'Deutscher Champion VdH'
  ];

  titleListEn: String[] = [
    'German KfT Champion',
    'KfT Youth Champion',
    'Luxemburg Champion',
    'German Champion VdH'
  ];

  factsDe: String[] = [
    'Geb. 24.09.2015',
    'Widerristhöhe 49cm',
    'Nachzuchten vorhanden',
    'ZZP 22.07.2017 angekört'
    // 'HD-A2 ED-0/0 Eyes-clear',
    // 'PLN-N/N Homozygous normal',
    // 'AY/AY',
    // 'B/B'
  ];

  factsEn: String[] = [
    'Born 24.09.2015',
    'Height at withers 49cm',
    'existing offspring',
    'breeding examination 22.07.2017'
    // 'HD-A2 ED-0/0 Eyes-clear',
    // 'PLN-N/N Homozygous normal',
    // 'AY/AY',
    // 'B/B'
  ];


  constructor() { }

  ngOnInit() {
  }

}
