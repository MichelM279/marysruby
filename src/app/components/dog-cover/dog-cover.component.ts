import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

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

  description: String;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.description = this.descriptionEn;
    } else {
      this.description = this.descriptionDe;
    }
  }

}
