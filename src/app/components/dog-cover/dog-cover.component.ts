import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-cover',
  templateUrl: './dog-cover.component.html',
  styleUrls: ['./dog-cover.component.scss']
})
export class DogCoverComponent implements OnInit {

  @Input()
  name: String;

  @Input()
  birthdate: String;

  @Input()
  imgPath: String;

  @Input()
  descriptionDe: String;

  @Input()
  descriptionEn: String;

  constructor() { }

  ngOnInit() {
  }

}
