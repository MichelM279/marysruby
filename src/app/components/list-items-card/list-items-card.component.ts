import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-list-items-card',
  templateUrl: './list-items-card.component.html',
  styleUrls: ['./list-items-card.component.scss']
})
export class ListItemsCardComponent implements OnInit {

  @Input()
  private titleDe: String;

  @Input()
  private titleEn: String;

  title: String;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
    } else {
      this.title = this.titleDe;
    }
  }

}
