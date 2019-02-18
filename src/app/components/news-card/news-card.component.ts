import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input()
  titleDe: String;

  @Input()
  titleEn: String;

  @Input()
  date: String;

  @Input()
  textDe: String;

  @Input()
  textEn: String;

  title: String;
  text: String;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.text = this.textEn;
    } else {
      this.title = this.titleDe;
      this.text = this.textDe;
    }
  }

}
