import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/datatypes/language';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  headline: String;
  private headlineDe = 'A-Wurf';
  private headlineEn = 'A-Litter';

  details: String;
  private detailsDe = 'Näheres folgt in Kürze!';
  private detailsEn = 'Details coming soon!';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.headline = this.headlineEn;
      this.details = this.detailsEn;
    } else {
      this.headline = this.headlineDe;
      this.details = this.detailsDe;
    }
  }

}
